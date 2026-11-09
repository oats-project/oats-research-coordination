# Changelog

## Unreleased

## template-v1.0.0

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
  person who asked for acceptance, a hand-off and not a card (`/land-the-report`).
- `/send-a-probe`: an adversarial review's "never of code under review" becomes "the
  claims a report leans on go to the verifier" (`/check-the-claims`); "Already known?"
  looks in the knowledge layer, earlier reports, published work and the code; "Who answers
  it" lists the researcher, the verifier, an expert soul and a soul with an environment,
  not the developer and the code reviewer; the harness names and the multi-agent mode's
  name are dropped; a probe needing a repository gets `--repo`/`--base` without pointing to
  `/coordinate-developers`; the brief's artefacts are a report or a brief at its revision
  and a source at its date, not a spec; the checkpoint points to `/plan-the-angles`. Its adapt marker
  (probes in parallel for one decision) is kept, and is the cap on researchers too.
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
  reader where the landing rules name one, to the person who asked, a new revision (a
  fresh verifier for a changed claim), landed (`ACCEPTED by`), after it lands, and
  publishing on a person's card in place of a release; the maintainer's read and the
  conflict with the default branch are dropped. "Retire what's finished" is engineering's,
  with a landed report in place of merged PRs and researchers and verifiers retired as
  probes.

**`oats.landing-rules`**: the shape and the opening paragraph are engineering's, with
dispatchers and research leads as its readers; the rules are research's.

**The repository:** `LICENSE`, the vendored schemas (OATS v0.69.7), the CI workflow (its
actions pinned to the same SHAs), `package.json`, the validator and its tests, adapted to
this template. The validator also checks that no text names a harness, a model or a
personal path, that no soul declares a `launch:`, and that the researcher's and the
verifier's reports fall back to their own sessions with no messaging layer.

### What to do
- Copying fresh: follow `ADAPTING.md`.
- Beside an engineering copy: `ADAPTING.md`, section 5.
