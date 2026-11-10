# The OATS research template

**This is a template: an organisation copies it and adapts it, and never pins it.** Its
repository is oats-project/oats-research-coordination. You copy the capabilities and souls
into your own workspace and shape them with [ADAPTING.md](ADAPTING.md).

Each way of working has a template of its own, named `oats-<way of working>-coordination`.
This one is for research: work that ends in a finding or a report, not a pull request (a
market study, a technical comparison, the research behind a design). Engineering's is
oats-project/oats-engineering-coordination, and scientific research's, released at
template-v1.0.0, is oats-project/oats-scientific-research-coordination.

## The way of working

**The design never splits a problem; it splits responsibility and context.** One lead owns
each question from framing to an accepted report, on a fresh instance. Helpers add a fresh
window, a cleaner read, an area's knowledge or an environment; for proper work they are
OATS instances the person can see, and one that checks work runs on a different model.
Researchers are the lead's probes, one angle each, in parallel. A verifier, briefed to
disprove, checks the claims the report leans on: it is a role, not an option. Every
hand-off is a message about a finished artefact at its exact reference. People give
direction and decisions, as one card with a recommendation, with no deadline and no
default if they are silent. A report lands when the person who asked (or whoever the landing
rules name) accepts it as the answer.

It suits organisations whose agents research questions for people who must decide: one
person or several. The template's roles:

- **Dispatcher,** for each person who wants a front door. It reads a request against the
  record, starts a fresh lead for it, introduces that lead once and steps aside. It never
  relays. It is engineering's, unchanged.
- **Research lead,** one soul per way of working that plainly differs, plus a generalist.
  Its instance frames the question with the person who asked, plans the angles, sends a
  researcher for each, has the load-bearing claims checked, writes the report, lands it and
  retires. It never checks its own claims.
- **Researcher,** fresh for each angle: the lead's OATS child. It opens primary sources,
  quotes the figure each finding rests on, dates it, names the model generation of a
  finding about agents, gives the strongest evidence against it, reports once and retires.
- **Verifier,** fresh for each check: the lead's OATS child, on a different model from the
  researchers and the lead wherever the organisation has one. Briefed to disprove, it reads
  the sources independently and gives a verdict per claim: holds, weak or wrong.

There is no developer, maintainer or code reviewer. An organisation that wants a
maintainer's read of its reports adds one at an adapt marker in the landing rules.

```
   person ──request──► dispatcher ──starts, introduces──► research lead
     ▲                                                   │  frame · angles · report · land
     ├──── the frame, cards, the report to accept, ──────┤
     │     one done note, in the effort's own thread     │
     │                                    one brief each │        ▲ one report each
     │                                                   ▼        │
     │                                  researchers, one per angle, in parallel
     │                                                   │        ▲ a verdict per claim
     │                                   the claims      ▼        │
     │                                          verifier, briefed to disprove
     └── accepts the report: it has landed
```

[How the work flows](docs/how-the-work-flows.md) follows one effort end to end, the cases
around it, and the evidence the design rests on.

## What's in it

- **`capabilities/`:** five working capabilities, each an inject (the always-on briefing)
  plus the skills an agent loads when it needs them.
  - `oats.dispatcher`: `/dispatch`. Taken unchanged from the engineering template,
    template-v2.1.0.
  - `oats.research-lead`: `/frame-the-question`, `/plan-the-angles`, `/send-a-probe`,
    `/check-the-claims`, `/write-the-report`, `/land-the-report`, `/hand-off`,
    `/ask-a-person`, `/land-on-agreement`, `/across-people`, `/findings-and-blocks`. The
    last five and `/send-a-probe` are the lead's shared skills, taken from the engineering
    template's expert at template-v2.1.0 and changed where they named a pull request, a
    developer or a maintainer ([CHANGELOG.md](CHANGELOG.md) lists each change).
  - `oats.researcher`: `/research-an-angle`, `/report-the-angle`.
  - `oats.verifier`: `/disprove-the-claims`.
  - `oats.landing-rules`: the organisation's landing rules and ownership record, in one
    small capability every coordinating soul composes: what lands a report, which acts a
    person approves, and where records are kept. The template's rules are an example.
- **`souls/`:** the example roster: `dispatcher`, `research-lead`, `researcher` and
  `verifier`.
- **[ADAPTING.md](ADAPTING.md):** what to copy, the principles that never change, every
  adaptation point with its question and default, how to record the release you copied,
  and how a copy sits beside an engineering copy in one workspace.
- **[CHANGELOG.md](CHANGELOG.md):** what changed per skill in each template release, so a
  copy can take up a change.

Every place where the template assumes something about an organisation carries one marker,
`<!-- adapt: <the question to ask> -->`. An adapted copy has none left.

## Using it

1. **Copy and adapt** with [ADAPTING.md](ADAPTING.md). Your organisation's setup expert does
   this at onboarding.
2. **Sync and start:** `oats sync`, then a dispatcher for each person who wants one, with
   who they are as its task:
   ```bash
   oats spawn dispatcher --name dispatcher-<person> --task-file <brief.md>
   ```
   Bring it your questions, or start a lead directly: `oats spawn research-lead --task
   "<question>"`.

A messaging capability (for example `oats.aweb`) is strongly recommended: hand-offs are
messages that wake their recipient. Without one, reports land in session transcripts.

A tasks layer, or your own answer to the landing rules' "where things are kept" marker, is
required. The texts keep each effort's record and its report's revisions in "your tasks
layer", live, because the rules themselves are copied into each instance at spawn and
can't change while work runs. A knowledge layer is recommended: it is where the findings
worth keeping go, dated and attributable.

`npm test` checks the template itself: every capability's `oats.json` and every soul against
the OATS schemas, the skills each inject names, the adapt markers and their list in
ADAPTING.md, that no text names a harness, a model or a personal path, and that the souls
load in real OATS kernels.

## Requirements
OATS ≥ 0.69.7, the floor every capability's `oats.json` declares, as in the engineering
template: the texts use needs-input (`oats instance attention`), retires that stop an
instance's children first, `--same-work`, and the wake that holds while a dialog is open
(`wake-hold`) under every checkpoint. Even there, a home whose `wakeHold` reads `unknown`
takes no wake: its waiter hands the wait up, and where no level can set one, that wait has
no bound. `npm test` previews every soul in OATS 0.69.7 and main, and checks that both list
the kernel features the texts rely on.

Works with any harness OATS supports. No soul here names a harness or a model: the lead
picks its researchers' and its verifier's models at spawn, from the model families the
organisation names (ADAPTING.md), and a copy may pin them in a soul's `launch:` or in each
machine's `oats-local.yaml` `souls.launch`. Researchers and verifiers are always OATS
children, never a lead's own subagents.

## License
MIT. The texts taken from the engineering template are awebai's, under the same licence.
