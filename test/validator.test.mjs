import assert from "node:assert/strict";
import { cpSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { spawnSync } from "node:child_process";
import test from "node:test";
import { fileURLToPath } from "node:url";

const REPO = resolve(fileURLToPath(new URL("..", import.meta.url)));

function runValidator(cwd = REPO) {
  return spawnSync(process.execPath, [join(cwd, "scripts", "validate-template.mjs")], { cwd, encoding: "utf8" });
}

function fixture(t) {
  const dir = mkdtempSync(join(tmpdir(), "oats-research-validator-"));
  t.after(() => rmSync(dir, { recursive: true, force: true }));
  cpSync(REPO, dir, {
    recursive: true,
    filter: (src) => !src.includes(`${REPO}/.git`) && !src.includes(`${REPO}/node_modules`),
  });
  return dir;
}

function mutate(t, relativePath, fn) {
  const dir = fixture(t);
  const path = join(dir, relativePath);
  writeFileSync(path, fn(readFileSync(path, "utf8")));
  return runValidator(dir);
}

test("validator accepts the real template", () => {
  const result = runValidator();
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /^Validated the research template at template-v2\.1\.2: 5 capabilities, 15 skills, 4 souls, 16 adapt markers/);
});

test("validator rejects capability manifest schema violations", (t) => {
  const result = mutate(t, "capabilities/researcher/oats.json", (text) => text.replace('"oats.researcher"', '"Researcher"'));
  assert.equal(result.status, 1);
  assert.match(result.stderr, /capabilities\/researcher\/oats\.json\/capability/);
});

test("validator rejects helperInjection and team targeting in capability manifests", (t) => {
  const result = mutate(t, "capabilities/researcher/oats.json", (text) => text.replace('"requires": []', '"team": "research",\n  "helperInjection": { "version": 1, "mode": "omit" },\n  "requires": []'));
  assert.equal(result.status, 1);
  assert.match(result.stderr, /helperInjection/);
  assert.match(result.stderr, /\.team/);
});

test("validator rejects skill frontmatter name mismatch and missing descriptions", (t) => {
  const result = mutate(t, "capabilities/researcher/skills/research-an-angle/SKILL.md", (text) => text.replace("name: research-an-angle", "name: other-name").replace(/description: .+\n/, ""));
  assert.equal(result.status, 1);
  assert.match(result.stderr, /frontmatter name must equal directory/);
  assert.match(result.stderr, /frontmatter must include a description/);
});

test("validator rejects duplicate skill names", (t) => {
  const dir = fixture(t);
  const target = join(dir, "capabilities/verifier/skills/research-an-angle");
  mkdirSync(target, { recursive: true });
  writeFileSync(join(target, "SKILL.md"), readFileSync(join(dir, "capabilities/researcher/skills/research-an-angle/SKILL.md")));
  const manifest = join(dir, "capabilities/verifier/oats.json");
  writeFileSync(manifest, readFileSync(manifest, "utf8").replace('"skills/disprove-the-claims"', '"skills/disprove-the-claims",\n    "skills/research-an-angle"'));
  const result = runValidator(dir);
  assert.equal(result.status, 1);
  assert.match(result.stderr, /duplicate skill name research-an-angle/);
});

test("validator rejects unknown slash skill references", (t) => {
  const result = mutate(t, "capabilities/researcher/injects/researcher.md", (text) => text.replace("/research-an-angle", "/missing-skill"));
  assert.equal(result.status, 1);
  assert.match(result.stderr, /\/missing-skill names no skill of this template/);
});

test("validator rejects a reference to an engineering skill this template doesn't carry", (t) => {
  const result = mutate(t, "capabilities/research-lead/skills/hand-off/SKILL.md", (text) => `${text}\nSee \`/coordinate-developers\`.\n`);
  assert.equal(result.status, 1);
  assert.match(result.stderr, /\/coordinate-developers names no skill of this template/);
});

test("validator rejects an inject that doesn't name one of its capability's skills", (t) => {
  const result = mutate(t, "capabilities/research-lead/injects/research-lead.md", (text) => text.replaceAll("`/check-the-claims`", "the checking skill"));
  assert.equal(result.status, 1);
  assert.match(result.stderr, /inject must name its skill \/check-the-claims/);
});

test("validator rejects bare skill names in code spans", (t) => {
  const result = mutate(t, "capabilities/researcher/injects/researcher.md", (text) => text.replace("/research-an-angle", "research-an-angle"));
  assert.equal(result.status, 1);
  assert.match(result.stderr, /must be written as \/research-an-angle/);
});

test("validator rejects invalid souls", (t) => {
  const result = mutate(t, "souls/verifier/soul.yaml", (text) => text.replace("schemaVersion: 2", "schemaVersion: 1"));
  assert.equal(result.status, 1);
  assert.match(result.stderr, /soul\.yaml\/schemaVersion/);
});

test("validator rejects broken docs links", (t) => {
  const result = mutate(t, "README.md", (text) => text.replace("docs/how-the-work-flows.md", "docs/missing.md"));
  assert.equal(result.status, 1);
  assert.match(result.stderr, /broken internal link docs\/missing\.md/);
});

test("validator rejects template-local ids in docs that are not defined", (t) => {
  const result = mutate(t, "README.md", (text) => text.replaceAll("oats.researcher", "oats.researchr"));
  assert.equal(result.status, 1);
  assert.match(result.stderr, /template-local id oats\.researchr is named in docs but not defined/);
});

test("validator rejects a skill that commands the messaging layer", (t) => {
  const result = mutate(t, "capabilities/researcher/skills/research-an-angle/SKILL.md", (text) => `${text}\nTell your lead with \`aw mail send\`.\n`);
  assert.equal(result.status, 1);
  assert.match(result.stderr, /researcher\/skills\/research-an-angle\/SKILL\.md:\d+: commands the aweb CLI/);
});

test("validator rejects an inject that commands the knowledge layer", (t) => {
  const result = mutate(t, "capabilities/research-lead/injects/research-lead.md", (text) => `${text}\nYou are finished when \`oats okf status\` says so.\n`);
  assert.equal(result.status, 1);
  assert.match(result.stderr, /research-lead\/injects\/research-lead\.md:\d+: commands the OKF layer/);
});

test("validator rejects a layer dependency in requires", (t) => {
  const result = mutate(t, "capabilities/researcher/oats.json", (text) => text.replace('"requires": []', '"requires": [{ "capability": "oats.aweb", "why": "messaging" }]'));
  assert.equal(result.status, 1);
  assert.match(result.stderr, /capabilities\/researcher\/oats\.json\/requires\/0/);
});

test("validator rejects a researcher whose report needs a messaging layer", (t) => {
  const result = mutate(t, "capabilities/researcher/injects/researcher.md", (text) => text.replace(/otherwise print it\s+as your final message/, "and wait for the reply"));
  assert.equal(result.status, 1);
  assert.match(result.stderr, /researcher\.md: the report must fall back to the researcher's own session/);
});

test("validator rejects a verifier whose report needs a messaging layer", (t) => {
  const result = mutate(t, "capabilities/verifier/injects/verifier.md", (text) => text.replace(/otherwise print it\s+as your final message/, "and wait for the reply"));
  assert.equal(result.status, 1);
  assert.match(result.stderr, /verifier\.md: the report must fall back to the verifier's own session/);
});

test("validator rejects a malformed adapt marker", (t) => {
  const result = mutate(t, "capabilities/research-lead/skills/plan-the-angles/SKILL.md", (text) => text.replace("<!-- adapt: Which model", "<!-- adapt Which model"));
  assert.equal(result.status, 1);
  assert.match(result.stderr, /plan-the-angles\/SKILL\.md:\d+: malformed adapt marker/);
});

test("validator rejects an adapt marker ADAPTING.md doesn't list", (t) => {
  const result = mutate(t, "capabilities/researcher/skills/research-an-angle/SKILL.md", (text) => `${text}\n<!-- adapt: Where do this organisation's researchers keep notes? -->\n`);
  assert.equal(result.status, 1);
  assert.match(result.stderr, /research-an-angle\/SKILL\.md: adapt marker "Where do this organisation's researchers keep notes\?" is not listed in ADAPTING\.md/);
});

test("validator rejects ADAPTING.md listing a marker that is gone", (t) => {
  const result = mutate(t, "capabilities/landing-rules/injects/landing-rules.md", (text) => text.replace(/<!-- adapt: Which sources may researchers[^\n]*\n/, ""));
  assert.equal(result.status, 1);
  assert.match(result.stderr, /ADAPTING\.md: lists "Which sources may researchers and the verifier use\?" for capabilities\/landing-rules\/injects\/landing-rules\.md, which has no such adapt marker/);
});

test("validator rejects an adapt marker outside a capability", (t) => {
  const result = mutate(t, "souls/researcher/AGENTS.md", (text) => `${text}\n<!-- adapt: Which sources does it read? -->\n`);
  assert.equal(result.status, 1);
  assert.match(result.stderr, /souls\/researcher\/AGENTS\.md:\d+: adapt markers belong in a capability's injects and skills/);
});

test("validator rejects a capability that doesn't record its template release", (t) => {
  const result = mutate(t, "capabilities/researcher/oats.json", (text) => text.replace(" Copied from the research template, template-v2.1.2.", ""));
  assert.equal(result.status, 1);
  assert.match(result.stderr, /capabilities\/researcher\/oats\.json\.description: must end with "Copied from the research template, template-v2\.1\.2\."/);
});

test("validator rejects a capability whose version isn't the template release", (t) => {
  const result = mutate(t, "capabilities/researcher/oats.json", (text) => text.replace('"version": "2.1.2"', '"version": "2.2.0"'));
  assert.equal(result.status, 1);
  assert.match(result.stderr, /capabilities\/researcher\/oats\.json\.version: must be the template release 2\.1\.2/);
});

test("validator rejects a soul composing a capability the template lacks", (t) => {
  const result = mutate(t, "souls/researcher/soul.yaml", (text) => text.replace("oats.researcher: { from: here }", "oats.researchr: { from: here }"));
  assert.equal(result.status, 1);
  assert.match(result.stderr, /souls\/researcher\/soul\.yaml: from: here names oats\.researchr, which is not a capability of this template/);
});

test("validator rejects a soul value YAML would not parse", (t) => {
  const result = mutate(t, "souls/verifier/soul.yaml", (text) => text.replace("with its evidence, once,", "with its evidence: once,"));
  assert.equal(result.status, 1);
  assert.match(result.stderr, /souls\/verifier\/soul\.yaml:3: a plain YAML value can't contain ": "/);
});

test("validator rejects a skill description YAML would not parse", (t) => {
  const result = mutate(t, "capabilities/researcher/skills/research-an-angle/SKILL.md", (text) => text.replace("The researcher's method for one angle", "The researcher's method: one angle"));
  assert.equal(result.status, 1);
  assert.match(result.stderr, /capabilities\/researcher\/skills\/research-an-angle\/SKILL\.md:3: a plain YAML value can't contain ": "/);
});

test("validator holds skill frontmatter to plain one-line values", (t) => {
  const file = "capabilities/researcher/skills/research-an-angle/SKILL.md";
  const lead = "description: The researcher's";
  const cases = [
    ['description: "The researcher\'s', /SKILL\.md:3: a frontmatter value can't start with "/],
    ["description: {text: The researcher's", /SKILL\.md:3: a frontmatter value can't start with \{/],
    ["description: 'The researcher's", /SKILL\.md:3: a frontmatter value can't start with '/],
    ["description: >\n  The researcher's", /SKILL\.md:3: a frontmatter value can't start with >/],
    ["description: Angle #1 The researcher's", /SKILL\.md:3: a plain YAML value can't contain " #"/],
    ["description:The researcher's", /SKILL\.md:3: a frontmatter line must be `key: value` on one line, with a space after the colon/],
    ["broken\ndescription: The researcher's", /SKILL\.md:3: a frontmatter line must be `key: value` on one line/],
    ["name: other\ndescription: The researcher's", /SKILL\.md:3: frontmatter key name appears twice/],
    ["description: 1. The researcher's", /SKILL\.md:3: a frontmatter value must read as text/],
  ];
  for (const [replacement, message] of cases) {
    const result = mutate(t, file, (text) => text.replace(lead, replacement));
    assert.equal(result.status, 1, replacement);
    assert.match(result.stderr, message, replacement);
  }
});

test("validator rejects a skill reference a composing soul can't load", (t) => {
  const result = mutate(t, "capabilities/research-lead/injects/research-lead.md", (text) => `${text}\nSee \`/disprove-the-claims\`.\n`);
  assert.equal(result.status, 1);
  assert.match(result.stderr, /research-lead\.md: skill reference \/disprove-the-claims is not a skill every soul composing oats\.research-lead has \(research-lead\)/);
});

test("validator rejects a forge CLI command in a skill", (t) => {
  const result = mutate(t, "capabilities/research-lead/skills/land-the-report/SKILL.md", (text) => `${text}\nRun \`gh pr merge 1\`.\n`);
  assert.equal(result.status, 1);
  assert.match(result.stderr, /land-the-report\/SKILL\.md:\d+: commands the GitHub CLI/);
});

test("validator reads a skill's references too", (t) => {
  const dir = fixture(t);
  const references = join(dir, "capabilities/research-lead/skills/land-the-report/references");
  mkdirSync(references, { recursive: true });
  writeFileSync(join(references, "publishing.md"), "Publish it with `gh release create`, then load `/land-your-prs`.\n");
  const result = runValidator(dir);
  assert.equal(result.status, 1);
  assert.match(result.stderr, /publishing\.md: skill reference \/land-your-prs names no skill of this template/);
  assert.match(result.stderr, /publishing\.md:\d+: commands the GitHub CLI/);
});

test("validator rejects docs and souls naming a skill or soul the template lacks", (t) => {
  const dir = fixture(t);
  const append = (rel, extra) => writeFileSync(join(dir, rel), readFileSync(join(dir, rel), "utf8") + extra);
  append("souls/researcher/AGENTS.md", "\nLoad `/land-your-prs` first.\n");
  append("README.md", "\nThen load `/land-your-prs`.\n");
  append("ADAPTING.md", "\nDrop the skill `find-the-maintainer`.\n");
  const roster = join(dir, "souls/dispatcher/AGENTS.md");
  writeFileSync(roster, readFileSync(roster, "utf8").replace("- `research-lead`:", "- `market-lead`:"));
  const result = runValidator(dir);
  assert.equal(result.status, 1);
  assert.match(result.stderr, /souls\/researcher\/AGENTS\.md: skill reference \/land-your-prs names no skill/);
  assert.match(result.stderr, /README\.md: skill reference \/land-your-prs names no skill/);
  assert.match(result.stderr, /ADAPTING\.md: names the skill find-the-maintainer, which this template lacks/);
  assert.match(result.stderr, /souls\/dispatcher\/AGENTS\.md: lists the soul market-lead, which this template lacks/);
});

test("validator rejects an adapt marker in a soul's yaml", (t) => {
  const result = mutate(t, "souls/researcher/soul.yaml", (text) => `${text}# <!-- adapt: Which sources does it read? -->\n`);
  assert.equal(result.status, 1);
  assert.match(result.stderr, /souls\/researcher\/soul\.yaml:\d+: adapt markers belong in a capability's injects and skills/);
});

test("validator rejects a skill directory its oats.json doesn't list", (t) => {
  const result = mutate(t, "capabilities/research-lead/oats.json", (text) => text.replace('    "skills/write-the-report",\n', ""));
  assert.equal(result.status, 1);
  assert.match(result.stderr, /capabilities\/research-lead\/skills\/write-the-report: skill directory is not listed/);
});

test("validator rejects a text that names a harness", (t) => {
  const result = mutate(t, "capabilities/research-lead/skills/send-a-helper/SKILL.md", (text) => `${text}\nIn Codex, use its own subagents.\n`);
  assert.equal(result.status, 1);
  assert.match(result.stderr, /send-a-helper\/SKILL\.md:\d+: names a harness \(Codex\)/);
});

test("validator rejects a text that names a model", (t) => {
  const result = mutate(t, "docs/how-the-work-flows.md", (text) => `${text}\nThe verifier ran on Gemini.\n`);
  assert.equal(result.status, 1);
  assert.match(result.stderr, /docs\/how-the-work-flows\.md:\d+: names a model \(Gemini\)/);
});

test("validator rejects a soul that declares a launch", (t) => {
  const result = mutate(t, "souls/verifier/soul.yaml", (text) => `${text}launch: { harness: codex }\n`);
  assert.equal(result.status, 1);
  assert.match(result.stderr, /souls\/verifier\/soul\.yaml: the template's souls declare no launch/);
});

test("validator rejects a personal path", (t) => {
  const result = mutate(t, "ADAPTING.md", (text) => `${text}\nThe copy lives in /home/someone/workspace.\n`);
  assert.equal(result.status, 1);
  assert.match(result.stderr, /ADAPTING\.md:\d+: names a personal path/);
});
