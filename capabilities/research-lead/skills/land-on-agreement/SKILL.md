---
name: land-on-agreement
description: Take your effort's report from checked to landed - the agreements your landing rules name at one revision (the verifier's verdict on each claim it leans on, your note, any further reader the organisation requires), the hand-off to the person who accepts it (by default the person who asked), whose acceptance of that revision lands it, a fresh verifier for a revision that changes a claim, publishing outside the organisation only on a person's yes - and retire what's finished, yourself last. Use whenever your report is ready to go for acceptance, while it waits, when it should be published, and when an instance you started, or your effort, is finished.
---

IMPORTANT: after a compaction, reload this skill before you continue the step.

# Land on agreement

## Your landing rules
Your landing rules are in your briefing, with any change to them you recorded since (the
rules say how), which wins. They name who accepts a report, what must hold at its revision
before it goes for acceptance, any reader beyond the verifier and the person who accepts it,
who decides publishing, where findings worth keeping go, and the one-way doors kept for
people. Read them once per effort, and again after a compaction. None in your briefing: that
is a block (`/findings-and-blocks`); send no report for acceptance until it is settled.

## 1. Checked
You never check your own claims, an angle you researched yourself included, and no
researcher checks its own. The claims the report leans on go to the verifier at the report's
revision (`/check-the-claims`). A verdict counts only with what it checked: a verdict
without its Checked line goes back to that verifier, or the claim to a fresh one. In a new
revision, each claim it finds weak you narrow to its evidence or show as weak; each one it
finds wrong you correct or drop, and change what rested on it; and each verdict you dispute
goes to a fresh verifier or is shown in the report as disputed, never relabelled by you.
Once every claim the report leans on has its verdict at one revision, write `CHECKED at
<revision>: <the verdicts, one line each>` on the effort's record.

## 2. A further reader
Where your landing rules name one, hand it the report at its checked revision
(`/hand-off`) and wait for its verdict by message. What it finds you fix in a new revision,
which goes back through step 1 where it changes a claim, and back to that reader for the
delta.

## 3. To the person who accepts it
When every agreement holds at one revision, hand the report to the person your landing rules
name to accept it (by default, the person who asked), in the effort's thread
(`/land-the-report`). It is a hand-off, not a card: what they decide is whether it answers
their question. Set needs-input, and wait.

## 4. A new revision
A revision that changes a claim the report leans on, or adds one, gets a fresh verifier for
that claim (`/check-the-claims`), never the one that checked the old wording, and a new
`CHECKED at <revision>`. A revision that changes no claim (wording, layout, a fixed link)
carries the verdicts:
`CHECKED at <new revision>: delta since <old revision> read, no claim changed`. Direction
people already gave (the frame, a card's answer) holds through a revision: nobody is asked
to decide it again. An acceptance and a yes to publish are of one revision: a revision that
changes or adds a claim after them goes back to the person who accepts the report (step 3),
and a yes to publish never carries to another revision.

## 5. Landed
The report has landed when the person who accepts it says it answers their question,
wherever that answer arrives. Record it on the effort's record, at its revision:
`ACCEPTED by <person>, <link>: <their words>`. Clear needs-input. An answer that it doesn't
yet answer their question, with why, goes back to the framing or the angles
(`/frame-the-question`, `/plan-the-angles`), and the next revision goes through steps 1 to 3
again.

## 6. After it lands
Write the findings worth keeping where your landing rules say (`/land-the-report`), update
the record's status, and act on what the report unblocks.

## 7. Publishing
Publishing outside the organisation is a one-way door. Send the person your landing rules
name one card (`/ask-a-person`): the accepted revision, where it would go, and what it
carries. After their yes, publish that revision as your landing rules say, and tell them
in one line that it is out. Never publish a revision other than the accepted one their
yes named.

## Retire what's finished
Finished instances are retired without asking or telling a person. Spawning and retiring
never involve one: done lines go to the parent that retires the child.

An instance is **finished** when all of these hold:
- its work has landed: its report accepted, or the work explicitly dropped. Handed back
  is not landed: it may still be needed for a revision. A probe's work is its answer;
- nothing waits on it: no open report, check, question, finding without an owner or
  hand-back of its own, and its own children are retired;
- with a duty to propose knowledge (your knowledge layer says whether you have one), its
  final knowledge checkpoint ("you finish a task") is run and its outcome recorded, as that
  layer says. A proposal it opened at any knowledge checkpoint is in the knowledge layer's
  hands from then on, not work above that must land: nobody waits for it.

- **The done report** says its final knowledge checkpoint's outcome in one of four lines,
  sent once the child has retired its own children and removed its extra worktrees:
  - "done, proposed: <PR URLs>": finished;
  - "done, nothing to propose: <reason>": finished;
  - "done, no duty to propose": finished;
  - "done, proposal pending: <slug and why>": not finished, its final proposal is not
    open yet. Retire nothing yet; it reports again, with one of the first three lines,
    once the proposal is settled.

  Ask for the line when a done report lacks it. A child whose work isn't a Git work tree
  also names each repository it used under its work, with its branch.
- **Before you retire it, check:**
  - `oats instance git <child>`: no uncommitted changes and no unpushed commits (a retire
    would keep such a work tree, not deliver it); otherwise the child finishes or hands its
    work over first. When its work isn't a Git work tree (`E_NO_WORKTREE`: directory or
    workspace mode), check each repository its done report names, read-only:
    `git -C <path> status --short --branch` shows a clean tree tracking its upstream, not
    ahead. An error, or a repository you can't see, is not clean: ask the child;
  - `oats retire <child> --plan`: no other instance is attached to its work tree;
    otherwise wait until that one is retired by its own parent.
- **Retire it** with `oats retire <child>`, and record it in your state (name, why). No
  acknowledgement is needed.
- **Only your own children.** Never retire another's child: tell its parent instead.
  Children are retired before their parent: a parent's retire stops and keeps its running
  children, and refuses with `E_CHILDREN_RUNNING` when one won't stop.
- **Never reuse a name:** a new instance never takes a retired one's name, which the
  records it left and the provenance of the knowledge it proposed still name.
- **Your helpers:** a helper with a scoped piece of work once its artefact is on the
  effort's record and your questions are answered. **Your probes** (your researchers, your
  verifiers and other helpers with a question): once they have answered (`/send-a-helper`).
  A probe's work is its answer, and its scratch commits are not delivered: skip the
  `oats instance git` check, and where it has a work tree, retire it with
  `oats retire <probe> --discard-worktree`. Retire any probe that hasn't answered too.
  **A standing specialist:** once the plan has no more work in its area and what it
  produced is on the effort's record, not after each task (`/send-a-helper`, "A standing
  specialist").
- **Yourself:** once your effort is finished (its report accepted, or the effort dropped,
  each finding with an owner, nothing waiting on you), retire your children, close the
  effort's record, run your final checkpoint, and send your person one done note in the
  effort's thread. Then, with an OATS parent, send it your done line, unprompted; it retires
  you. With none (spawned `--relation unrelated`, or started directly by a person), run the
  same checks on yourself and retire yourself with `oats retire "$OATS_INSTANCE" --self`
  (the instance name is required).

Taken from the engineering template's engineering-expert, template-v3.1.0; changed where it
named a pull request, a developer, a maintainer, a merge or a release.
