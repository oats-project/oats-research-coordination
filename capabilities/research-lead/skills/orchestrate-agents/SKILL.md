---
name: orchestrate-agents
description: Decides whether a piece of an effort goes to another agent, and runs that agent well - when a child is worth its cost and when to do the work yourself, which kind (a researcher, a verifier, a short-lived probe or helper, or a long-lived specialist that leads one area), whether the new instance is a child, a sibling lead or an independent lead, the brief, what comes back, and its retirement. Use before starting or briefing any instance, when a step of the plan lies in another area, and when a theory, a source or a method the plan rests on needs testing.
---

# Orchestrate agents

Your children do parts of your effort. The effort, the plan, every decision in it and the
report stay yours, whichever areas they cross.

## 1. Is a child worth it?
One agent is the default: several cost 3 to 10 times the tokens of one. Start a child
only when one of your briefing's three reasons holds (protecting context, parallel work,
specialisation), and name it in the brief. Otherwise do the work yourself. The verifier is
the exception: every report needs one, with its own brief (`/check-the-claims`).
Researchers are chosen per angle (`/plan-the-angles`).

Good boundaries are independent questions (angles), areas with a written interface, and
checks of claims against their sources. Bad ones are phases of one piece of work (a
reader, a summariser and a writer for one angle), tightly coupled parts, an area that
differs only in a few concepts to read (that is knowledge, and you read it), and anything
that needs shared state or constant back-and-forth.

First check that it isn't known already: in your knowledge, the organisation's earlier
reports or published work. Record a search that found nothing, so nobody runs it again.

## 2. Which kind
- **Short-lived:** a researcher with one angle (`/plan-the-angles`), a verifier with one
  list of claims (`/check-the-claims`), a probe with one closed question, or a helper with
  one scoped piece: a part of the effort that is well defined, needs little from the rest
  and hands back a compact result, and needs capabilities you lack (another soul's
  skills, sources, environment or tools). It reports once, distilled, and retires.
  Send one whenever a reason holds, at any size and level of the tree.
- **A long-lived specialist:** it leads one area of a large effort, for the whole effort.

A step of your plan in another area is still your effort. Where a read answers it, read
that area's knowledge yourself: every area is readable. Where it needs that area's
judgment, sources or a clean context, it goes to the area's specialist, or to a helper: a
fresh instance of that area's expert soul.

## 3. Child, sibling or independent
An effort is one question that can be answered on its own. Work its "answered" needs
stays in it; work it can finish without (a follow-on question, a finding outside your
question) is another effort. In doubt, it is yours.

| Its work | Relation | Spawn with |
|---|---|---|
| A part of your effort: a specialist, a helper, a probe, a researcher, a verifier | your **child** | `--parent <your instance> --same-work` |
| A new effort that arises from yours: a follow-on, a discovery that bears on your question, a piece your person wants tracked apart | your **sibling**, a lead of its own | `--relation sibling --relative-to <your instance>` |
| A new effort with no bearing on yours | **independent**, a lead of its own | `--relation unrelated` |

- A child asks you and hands back to you, and you make sure it is retired. Retiring
  you stops it first, so a lead of another effort is never your child.
- A sibling or independent lead gets your message as its task (`/hand-off-and-ask`),
  opening with its seat (root lead of the new effort), and its own effort record, linked
  both ways with yours. Tell your person at once its exact name, what it leads and where
  its record is, and put it on your effort's record. In doubt between the two: would your
  person look for it next to this effort? Then sibling.
- Only a root lead with no parent (a dispatcher or a person started it) spawns a sibling:
  a sibling takes its anchor's parent. With a parent, ask it to launch the new lead. As a
  specialist, hand a new effort to your parent.

```bash
oats spawn <soul> --parent "$OATS_INSTANCE" --same-work --name <task>-<role> --task-file <brief.md>
```
`--same-work` records that the child does your work, and your person's sidebar draws its
line to you; it shares no work tree. A child that needs a repository's contents gets its
start point checked before you apply
([references/start-point.md](references/start-point.md)). Where `$OATS_INSTANCE` is empty
(a resumed session), write your instance name.

## 4. A specialist
Start one per area when the effort is large or crosses several areas: a fresh instance of
the expert soul that knows the area.
<!-- adapt: Which expert souls can lead an area as a specialist, or take a helper's task, and what does each bring (sources, an environment, skills, a domain)? -->
The generalist `research-lead` takes any area, one fresh instance per area.

What counts as one area: [references/briefs.md](references/briefs.md), "A specialist".
- **It leads its area's angles inside your plan,** as a lead leads an effort: it frames
  its part with you, plans its angles, sends its own researchers, probes and helpers, has
  its area's claims checked by its own verifier, and hands you its findings at a checked
  revision. It never writes the report, and never checks a claim it made. It sizes its
  own tree as you do (specialists of its own only for narrower sub-areas); you keep what
  your briefing gives the root lead.
- **Interfaces:** read the area's knowledge yourself, enough to write each interface (the
  specialist carries the depth), and write each one before either side relies on it. From then on the two
  specialists agree a change directly and record it on the effort's record. What they
  can't settle is yours.
- **Its findings:** it reports at the milestones its brief names (`references/briefs.md`,
  "A specialist"); you read its findings once against its brief and write `VERIFIED at
  <revision>` (`/landing-rules-detail`) before the report leans on them.

## 5. Probes and helpers
A probe tests one thing the plan rests on, by experiment or a reading in a fresh context:
that a source or a dataset exists and covers the population the frame names, that a method
measures what the decision needs. A plan that rests on an untested assumption, or on one
approach chosen by argument, isn't ready.
[references/probes.md](references/probes.md) has the method, and how to choose a probe's
model.

A helper hands its scoped piece back at an exact reference, with how it was produced; you
read it once against its brief and write `VERIFIED at <reference>`. It is a source, not a
verdict: keep it on the effort's record, and a claim the report takes from it goes to the
verifier, never to the helper.

An OATS child is visible to your person, has its own messaging and knowledge, and is
retired on record. Every researcher's angle and every verifier's check is one. Use a
native subagent of your harness only for a small lookup that needs no soul's knowledge or
environment, where your person asks for one, or inside your harness's multi-agent
workflow mode.

## 6. Brief it, and take back its result
Write the brief from [references/briefs.md](references/briefs.md). For an expert
instance, ALWAYS name its seat on a `Seat:` line (specialist, or helper or probe): it
acts by the seat its task names. A researcher and a verifier are their own seat, with no
such line.
Then:
- Set a checkpoint before you wait on it (`/wait-and-retire`), and don't ask it for
  progress: it reports its result, a question or a blocker.
- Read what comes back against the plan. Check a claim the plan will rest on against what
  the child points to (the source, the page, the run), not its summary. Record what you
  rejected, and why, one line each, on the effort's record.
- A finished child retires itself. Check that it is gone, and retire one that is
  finished or stalled and still listed (`/wait-and-retire`, "The parent's sweep").
