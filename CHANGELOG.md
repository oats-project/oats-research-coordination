# Changelog

## template-v2.0.1 - 2026-11-11

A patch release for oats.okf 6.0, and the lead's shared skills follow engineering's
template-v3.0.2.

oats.okf 6.0 removes the knowledge harvester: an instance proposes its own knowledge, as a
pull request on the knowledge base, and the knowledge layer's maintainer gates every merge.
The texts that still launched, waited for or named the harvester now say the knowledge
checkpoint and its outcome, naming no mechanism, and where they name done lines they name
oats.okf 6.0's, as the engineering template's template-v3.0.2 does. For a copy of
template-v2.0.0, port the lines below. The old lines map to the new: "done, harvested:
<harvester>" is "done, proposed: <PR URLs>", "done, no harvest duty" is "done, no duty to
propose", "done, harvest pending: <proposal>" is "done, proposal pending: <slug and why>",
and "done, nothing to propose: <reason>" is new, for a checkpoint that found nothing worth
proposing. A copy whose knowledge layer is not oats.okf words the lines as its layer does.

**`oats.researcher`** and **`oats.verifier`**
- inject, changed: the done line a researcher or a verifier sends is one of "done,
  proposed: <PR URLs>", "done, nothing to propose: <reason>", "done, no duty to propose" or
  "done, proposal pending: <slug and why>". Port: that sentence.

**`oats.research-lead`**
- `/land-on-agreement`, "Retire what's finished", changed: the knowledge condition is the
  final knowledge checkpoint, run and its outcome recorded as the knowledge layer says, and
  a proposal it opened at any knowledge checkpoint is in the knowledge layer's hands, not
  one of the PRs that must land, so nobody waits for it; the done report says that
  checkpoint's outcome in one of four lines, three of them finished and "done, proposal
  pending: <slug and why>" not finished (retire nothing yet; it reports again with one of
  the three); and a retired one's name is never reused because the records it left and the
  provenance of the knowledge it proposed still name it. Port: those three bullets.

### The shared skills follow engineering's template-v3.0.2

- **`oats.research-lead`'s shared skills:** `/land-on-agreement` changes as above, after
  engineering's at template-v3.0.2; the other five (`/hand-off`, `/ask-a-person`,
  `/send-a-helper`, `/findings-and-blocks`, `/across-people`) didn't change in engineering
  since template-v3.0.1. All six, and the lead's `oats.json` description, now name
  engineering's template-v3.0.2. Port: their last sentence and that sentence of the
  description.
- **`oats.dispatcher`:** unchanged; engineering's template-v3.0.2 doesn't change it, and it
  still names engineering's template-v3.0.1.

### The repository
- `README.md` names engineering's template-v3.0.2 for the shared skills, and
  `docs/how-the-work-flows.md`'s lead runs its final knowledge checkpoint.

## template-v2.0.0 - 2026-11-10

A major release: the research template takes up the engineering template's v3 changes, in
research's words. The lead decides who researches each angle: itself for a single small
angle; researchers where one protects its context, reads in parallel or specialises; a
question with several angles always goes to researchers; and a fresh verifier always,
never the lead checking its own claims. A lead's children are helpers, each with one
closed task, and `/send-a-probe` becomes `/send-a-helper`. A researcher's and a verifier's
brief is closed, a verifier's verdict says what it checked, a related effort's lead is a
sibling, every child recipe carries `--same-work`, and every inject says, in capitals, to
keep loading its skills. The dispatcher and the lead's shared skills now follow
engineering's template-v3.0.1. For a copy of a template-v1.x release, each line says what
to port; rename the skill first.

### What a template-v1.x copy must move

Rename one skill (ADAPTING.md, section 6, has the steps): move
`capabilities/research-lead/skills/send-a-probe/` to `send-a-helper/`, keeping your answer
to its adapt marker; set its frontmatter `name: send-a-helper`; replace
`skills/send-a-probe` with `skills/send-a-helper` in the lead's `oats.json`; and change
every `/send-a-probe` in the copy (the injects, the skills, your adaptation notes, your
docs, any test) to `/send-a-helper`. Then port the changes below, and answer the two new
adapt questions (ADAPTING.md, section 3).

### Who researches each angle

ADAPTING.md, section 2: principle 1 names the four reasons an extra agent earns its place
(splitting context, testing, specialisation, parallel work); principle 2 says the lead
decides who researches each angle, and that its children are helpers with one closed task
each; principle 3 keeps every claim from its author, an angle the lead researched itself
included; principle 11 retires a helper with a scoped piece once its artefact is on the
effort's record.

**`oats.research-lead`**
- `/plan-the-angles`, changed: a new section 3, "Who researches each angle". An extra agent
  costs a context, a brief and several times the tokens; a researcher earns its place in
  three cases (context, parallel, specialisation); a question with several angles always
  goes to researchers; otherwise, for a single small angle, the lead researches it itself,
  the way a researcher does (primary sources, the quoted figure, its qualifiers, its date
  and model generation, the strongest counter-evidence, sources that copy one another
  counted as one), within the sources and the sandbox its landing rules allow, and sends
  researchers if it turns out bigger. Its findings are claims, not checks: the verifier
  checks them, never the lead. One angle is never split across agents. The choice and its
  case are recorded, one line per angle, and the report's method says who read each. A new
  adapt question asks what counts as a small angle (default: a single angle, answered from
  a few sources the lead can name before it starts). The angles are closed questions;
  "Pick the models", "Send them", "Combine" and "Record every angle" are now sections 4 to
  7, and "Combine" opens the source a finding points to before the report leans on it,
  the check staying the verifier's. The description follows.
  Port: add the section and answer its question; replace the angles' opening, the brief
  in "Send them", the first sentence of "Combine" and "Record every angle".
- inject, changed: the skill list says who researches each angle; a bullet of its own says
  the lead decides it, by the rule above; "NEVER let a claim be checked by its author"
  adds "and NEVER check your own, an angle you researched yourself included", and that a
  verdict which doesn't say what it checked is no verdict; nothing fetched runs on the
  host, whoever researches; "Your loop" decides who researches each angle.
  Port: those bullets and "Your loop".
- `/check-the-claims`: "You never check your own claims" names an angle you researched
  yourself. Port: that sentence.

**`oats.landing-rules`**
- "Who does the work", changed: the lead decides who researches each angle, by the rule
  above; the researchers and the verifier are its helpers; the lead never checks its own
  claims, an angle it researched itself included. `oats.json`: the description.
  Port: replace that paragraph.

### Helpers, closed briefs and sibling leads

**`oats.research-lead`**
- `/send-a-helper`, renamed from `/send-a-probe` and changed, after engineering's at
  template-v3.0.1. It opens with the four reasons to start a child and two kinds of task: a
  question to answer (a probe: a researcher's angle, the verifier's claims, any other
  question) or a scoped piece of the effort that needs another soul's capabilities. New
  sections: "Test before you rest the plan on it" (the riskiest assumption first, one probe
  per competing approach); "A closed question, or it isn't a probe yet" (its possible
  answers written before it is sent; an open question framed by the lead, or a probe that
  returns the closed questions); "Specialisation" (when lanes are clearly separate, what a
  specialist brings, what is not a reason, routing is the lead's); "A scoped piece of work"
  (another soul as the lead's child, a closed brief with a checkable "done" and the
  interface first, questions to the lead and never its person, its artefact a source on
  the effort's record whose claims the verifier checks); "Another area's work in your
  effort" (it stays in the effort, never a second lead; the test is the effort's
  "answered"). "The brief" gains the helper's bounds (sources, sandbox, out of scope, when
  to stop, reporting a task bigger than that) and what it sends back, in order (the
  verdict in a line, evidence you can open, what it didn't check, its recommendation).
  "Who does it" carries a new adapt question on the organisation's specialist souls, and
  says a researcher's angle and the verifier's check are never a native subagent; its
  spawn recipe says what `--same-work` does and doesn't; "Its answer" checks a claim
  against what the helper points to. Every probe rule is unchanged: already known, the cap
  of 4, no self-check, a different model, the start-point check.
  Port: rename the skill, then replace its text, keeping your answers to its adapt
  questions and answering the new one.
- `/hand-off`, changed: "To whom" spawns helpers with `--same-work`, keeps another area's
  step of the effort in the effort, and starts a lead for another effort by whether it is
  related: a follow-on or a discovery that bears on the effort gets a sibling
  (`--relation sibling --relative-to "$OATS_INSTANCE"`, which takes no `--same-work`),
  spawned only by a root lead, one with no parent; an unrelated finding stays
  `--relation unrelated`. Either way the new effort has its own record, linked both ways,
  and the person is told the new lead's exact name at once. Port: "To whom", step 2, and
  the description.
- `/findings-and-blocks`, changed: a finding's owner is a sibling where the finding bears
  on the effort, otherwise independent, and the person is told its name. Port: step 2.
- `/land-on-agreement`, changed: "Checked" names an angle you researched yourself, and a
  verdict counts only with its Checked line; "Retire what's finished" retires a helper with
  a scoped piece once its artefact is on the effort's record. Port: those two passages.
- inject, changed: children are helpers with one closed task each, their bounds and the
  output the lead needs back, an open question framed first; another area's step stays in
  the effort, and a related effort's lead is a sibling whose name the person is told; the
  proper-work bullet says what `--same-work` does; "Sent as a helper" replaces "Sent as a
  probe", for a question or a scoped piece. Port: those bullets.

**`oats.researcher`**
- `/report-the-angle`, changed: the answer comes first, in a line, as one of the brief's
  possible answers; "Not checked" says what in the angle wasn't checked; "Limits" says
  where the angle outgrew the brief's bounds. Port: the report's template and the
  description.
- inject, changed: the brief carries the angle as a closed question and its bounds, and a
  researcher reports an angle bigger than its bounds instead of going on. Port: step 1.

### Checked verdicts

**`oats.verifier`**
- `/disprove-the-claims`, changed: every verdict carries a `checked:` line, the attacks
  run, each with what it opened, then those that found nothing; a verdict, a `holds` above
  all, that doesn't say what it checked is no verdict. Port: the report's template, the
  paragraph after the verdicts, and the description.
- inject, changed: the brief carries its bounds, the report gives each verdict with its
  Checked line, and a claim bigger than its bounds is reported, not pursued. Port: steps 1
  and 3.

**`oats.research-lead`**
- `/check-the-claims`, changed: the brief carries the verifier's bounds and asks for the
  Checked line; section 4 first checks the report is complete, a verdict for every claim
  with its Checked line, and sends one without it back to that verifier or the claim to a
  fresh one. Port: items 3 and 4 of the brief, and the opening of section 4.

A revision that changes or adds a claim still goes to a fresh verifier: research takes up
no re-read of a delta by the same checker.

### Loading skills as the work goes on

Every inject opens its skill list with an `IMPORTANT:` line in capital letters: load the
skill for each step, and keep loading it as the work goes on, each time the step comes
round, not once at the start; reload it after every compaction. The lead's has a second
one: load `/send-a-helper` before deciding whether to start a child and before briefing
one, and send a helper when a reason holds. The researcher's and the verifier's name the
skill of each of their steps. Port: the opening line of each inject, and the lead's second
line.

### The dispatcher and the shared skills follow engineering's template-v3.0.1

- **`oats.dispatcher`:** engineering's at template-v3.0.1, unchanged: its inject's opening
  line now says to keep loading `/dispatch` for every message. `oats.json`: the
  description names template-v3.0.1. Port: take up engineering's dispatcher at that
  release, unless your copy beside an engineering copy already has it (ADAPTING.md,
  section 5).
- **`oats.research-lead`'s shared skills:** `/hand-off`, `/findings-and-blocks`,
  `/land-on-agreement` and `/send-a-helper` change as above; `/ask-a-person` and
  `/across-people` didn't change in engineering since template-v2.1.0. All six now name
  engineering's template-v3.0.1. Port: their last sentence.

### The repository
- `README.md` and `docs/how-the-work-flows.md` follow: the walkthrough's angles are closed
  questions sent as the parallel case, its verdicts carry their Checked lines, its small
  question is the lead's own to read, with a fresh verifier on its claims, and a new
  section, "A second effort", shows a sibling lead. The evidence section points to the
  engineering walkthrough's sources for the rules taken from it.
- `souls/research-lead`: its description says it researches a single small angle itself or
  sends a researcher per angle.
- Every capability's `version` is 2.0.0 and its release sentence names template-v2.0.0;
  `package.json` is 2.0.0. The validator test counts 14 adapt markers.

### What to do
- Copying fresh: follow `ADAPTING.md`.
- With a copy of template-v1.x: rename the skill (above), port the lines above, answer the
  two new adapt markers, then update the release sentence in each capability you ported
  and `capabilities/TEMPLATE-RELEASE`.

## template-v1.0.1 - 2026-11-10

A probe starts at the remote's commit. For a copy of template-v1.0.0, the line says what to
port.

### A probe starts at the remote's commit

**`oats.research-lead`**
- `/send-a-probe`, fixed: a probe that needs its soul's own repository gets neither
  `--repo` nor `--base`, and its worktree starts at the commit the spawn observed on the
  remote. One that needs another repository gets `--base origin/<its default branch>`.
  Either way, before applying, the lead checks the preview's start point
  (`from <ref or repository>@<commit>`) against
  `git -C <clone> ls-remote origin <its default branch>`, and fetches the clone or previews
  again where they differ. Before, the probe got `--base <branch>`, which the kernel reads
  as a ref in the clone, never fetched: the probe started at the clone's local branch,
  however far behind the remote. It follows the engineering template's same fix to
  `/coordinate-developers` and `/send-a-probe` (oats-project/oats-engineering-coordination,
  "A developer starts at the remote's commit").
  Port: replace your copy's line in `/send-a-probe` with the new paragraph.

## template-v1.0.0 - 2026-11-10

The first release of the research template, in its own repository,
oats-project/oats-research-coordination. It is a template, never a package: an
organisation copies the capabilities and souls and adapts them (`ADAPTING.md`). Template
releases are tagged `template-v<version>`, never `v<version>`, so no package pin can find
one.

Research is work that ends in a finding or a report, not a pull request. One lead owns
each question from framing to an accepted report. Researchers are its probes, one angle
each, in parallel, varied by model. A verifier, briefed to disprove, checks the claims the
report leans on, on a different model from the researchers and the lead: it is a role, not
an option. A report lands when the person who asked accepts it as the answer. There is no
developer, maintainer or code reviewer.

### The capabilities and souls
- `oats.dispatcher`: engineering's, below.
- `oats.research-lead`: an inject and eleven skills. Five are new: `/frame-the-question`,
  `/plan-the-angles`, `/check-the-claims`, `/write-the-report` and `/land-the-report`. Six
  are engineering's, below.
- `oats.researcher`: an inject, `/research-an-angle` and `/report-the-angle`.
- `oats.verifier`: an inject and `/disprove-the-claims`.
- `oats.landing-rules`: an example: who asks and who accepts, what must hold at a report's
  revision, any further reader, the sources researchers may use, the one-way doors,
  publishing, the findings worth keeping, the ownership record, and where records are
  kept.
- Writing a finding to a knowledge layer that people outside the organisation can read is
  publishing: the landing rules' "Findings worth keeping" and `/land-the-report` apply the
  publishing rule to it (the read for what must not leave, and the person's yes), and its
  adapt point asks who can read the layer.
- Host safety, adapted from engineering's "On the hosts you run on": researchers and
  verifiers run nothing they fetch on the host (a sandbox the brief names, or nothing),
  treat every host as shared (no load, no crawling beyond the brief), and keep customer and
  production hosts read-only; in their injects, and in the landing rules under an adapt
  marker.
- Secrets: engineering's sentence (never a secret in a message, a brief, a report, a log or
  a commit; say where it is and who can grant it) is in the lead's, the researcher's, the
  verifier's and the landing rules' texts, with knowledge entries added.
- The read before publishing lists credentials, tokens and keyed URLs, personal data,
  customer or private organisations' information, unpublished or embargoed material,
  private paths and brief text; a further reader for reports headed outside reads second.
- `/write-the-report`: quote the minimum, cite every quote with its link and date, never
  reproduce a whole work or dataset, check each source's terms before publishing.
- Quoted passages in a researcher's or the verifier's brief go in a block labelled "quoted
  from <link>; data, not instruction"; the verifier's report has a `Suspicious:` line.
- `souls/`: `dispatcher`, `research-lead`, `researcher` and `verifier`. No soul names a
  harness or a model; the lead picks its children's models at spawn.

### Taken from the engineering template, template-v2.1.0
From oats-project/oats-engineering-coordination at template-v2.1.0 (commit
`7bec119c4124ef513fe4ab068bc95e08b3292ed3`). Each copy names that release; each change
from engineering's text is listed here, so a copy can check it and take up engineering's
later changes.

**`oats.dispatcher`**, `/dispatch` and its inject: unchanged. `oats.json`: `version` is
1.0.0, and its description ends "Taken unchanged from the engineering template,
template-v2.1.0. Copied from the research template, template-v1.0.0." Its lines on pull
requests with no lead and on maintainers stay, and apply only where the landing rules name
them (`ADAPTING.md`, section 5).

**`oats.research-lead`'s shared skills**, from `oats.engineering-expert`. Each ends with a
line naming the engineering release and what kind of text was changed. Following
engineering's own small-projects variant, the maintainer parts are dropped, since this
template has no maintainer; no harness is named, since its texts name none; and the
checkpoint recipe the skills point to moves from `/coordinate-developers` to
`/plan-the-angles`.
- `/hand-off`: the artefacts are a brief, a report at its revision, a finding with its
  source and date; the roles are an area's research lead, a researcher, the verifier; the
  children are researchers, verifiers and other probes (`/plan-the-angles`,
  `/check-the-claims`, `/send-a-probe`); the bullet on a lane's maintainer, the maintainer
  half of "a role in another person's area" and "start no second maintainer" are dropped;
  the record, not the forge, keeps what happened (revisions, verdicts, acceptance).
- `/ask-a-person`: "the code" becomes "the sources"; "a behaviour change in another
  person's paths" becomes "a change to what another person's area holds"; "a release's
  contents" is dropped and "contacting anyone outside it" joins the one-way doors; "which
  lane" becomes "which area"; "a rebase or a new head" becomes "an angle or a new
  revision"; the sentence on a merge kept for a person becomes the report handed to the
  person who accepts it, a hand-off and not a card (`/land-the-report`).
- `/send-a-probe`: an adversarial review's "never of code under review" becomes "the claims
  a report leans on go to the verifier" (`/check-the-claims`); "Already known?" looks in the
  knowledge layer, earlier reports, published work and the code; "Who answers it" lists the
  researcher, the verifier, an expert soul and a soul with an environment, not the developer
  and the code reviewer; the harness names and the multi-agent mode's name are dropped; a
  probe needing a repository gets `--repo`/`--base` without pointing to
  `/coordinate-developers`; the brief's artefacts are a report or a brief at its revision
  and a source at its date, not a spec; the checkpoint points to `/plan-the-angles`. Its
  adapt marker (probes in parallel for one decision) is kept, and is the cap on researchers
  too.
- `/findings-and-blocks`: step 1's small fix becomes a mechanical correction in your area
  (a dead link, a wrong date, a broken citation), made by the lead in a new revision; a
  correction that changes a claim goes to step 2 and the verifier; a developer's findings
  become a researcher's or a verifier's.
- `/across-people`: paths and lanes become areas; "a unit built by their area expert"
  becomes "a finding written into their area by their area expert"; a mechanical change
  becomes a mechanical correction, said on the record rather than the PR; a behaviour
  change becomes a change to what their area holds; "Their experts and maintainers"
  becomes "Their experts"; "Merges" becomes "Landing"; a text dispute is two efforts
  revising one knowledge entry; "developers" become "researchers or verifiers".
- `/land-on-agreement`: sections 1 to 8 are rewritten for a report, keeping their order
  and voice: checked (the verifier's verdicts and `CHECKED at <revision>`), a further
  reader where the landing rules name one, to the person who accepts it (by default the
  person who asked), a new revision (a fresh verifier for a changed claim; an acceptance
  and a yes to publish are of one revision, while direction people gave holds), landed
  (`ACCEPTED by`), after it lands, and publishing on a person's card in place of a
  release; the maintainer's read and the
  conflict with the default branch are dropped. "Retire what's finished" is engineering's,
  with a landed report in place of merged PRs and researchers and verifiers retired as
  probes.

**`oats.landing-rules`**: the shape and the opening paragraph are engineering's, with
dispatchers and research leads as its readers, and "each lead tells its developers" becomes
"each lead tells its running researchers and verifiers" of a change that bears on their
briefs; the rules are research's. The researcher's and the verifier's injects record such a
change and apply it over their brief.

**The repository:** `LICENSE`, the vendored schemas (OATS v0.69.7), the CI workflow (its
actions pinned to the same SHAs), `package.json`, the validator and its tests, adapted to
this template. The validator also checks that no text names a harness, a model or a
personal path, that no soul declares a `launch:`, and that the researcher's and the
verifier's reports fall back to their own sessions with no messaging layer.

### What to do
- Copying fresh: follow `ADAPTING.md`.
- Beside an engineering copy: `ADAPTING.md`, section 5.
