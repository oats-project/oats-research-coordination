---
name: land-on-agreement
description: Takes a report from its claims checked to landed - CHECKED at one revision, an area maintainer's GREEN LIGHT or another reader where the landing rules ask for one (finding that maintainer by its instance name), the hand-off to the person who accepts the report, whose acceptance of that revision lands it, a new revision and what it needs again, the findings worth keeping, publishing outside the organisation only on a person's yes, and saying published only once checked. Use whenever a report is ready to go for acceptance, while it waits, when its person answers, when anyone asks to publish it, and when it has landed.
---

# Land on agreement

A report has landed when it is accepted as the answer to the framed question, by the
person your landing rules name: by default, the person who asked. Nobody else accepts it
for them, and no agent publishes it on its own word.

Your landing rules, in your briefing, name who accepts a report, what lands it, any
reader beyond the verifier, who decides publishing, where findings worth keeping go, and
the one-way doors kept for people; `/landing-rules-detail` defines each. Read them once
per effort and again after a compaction. A change to them you recorded since wins. With
none in your briefing, send no report for acceptance: that is a block
(`/hand-off-and-ask`).

## 1. Checked
The claims the report leans on go to a verifier at the report's revision
(`/check-the-claims`). You never check your own, an angle you researched yourself
included, and no researcher or specialist checks its own. A verdict counts only with its
Checked line. Each claim it finds weak you narrow to its evidence or show as weak; each
one it finds wrong you correct or drop, and change what rested on it; each verdict you
dispute goes to a fresh verifier or is shown in the report as disputed, never relabelled
by you. Once every claim the report leans on has its verdict at one revision, write
`CHECKED at <revision>: <the verdicts, one line each>` on the effort's record.

As a specialist, this is your area's last step: hand your parent your area's findings at
that checked revision, with the note. Its `VERIFIED` and the report are your parent's.

## 2. A maintainer's green light, or another reader
Only where your landing rules ask for one in the report's area; an area they don't name
needs none.

**Find the maintainer** by its instance name: the person who owns the area, the area,
then `maintainer`. [references/find-the-maintainer.md](references/find-the-maintainer.md)
says how, what to do when it is stopped, and what to do where none exists. Never start a
second maintainer for an area while one exists, even a stopped one.

**Call it** by message, with the report at its checked revision, the frame, your
`CHECKED` note and the verdicts it acted on, and any claim shown as weak or disputed.
- **`GREEN LIGHT at <revision>`:** go on to the acceptance.
- **`RETURN at <revision>`:** its findings go into a new revision, through step 1 where a
  claim changes, and the new revision goes back to the maintainer. After 3 returns on one
  report, stop: put both positions, each with its evidence, to your person in one card.
- **`ESCALATE`:** a direction question went to whoever decides it. Wait for that answer;
  no verdict comes before it.

Another reader the landing rules name gets the checked revision the same way, and what it
finds goes into a new revision, back to that reader for the delta. A new revision needs a
new green light: the maintainer reads the delta and gives it again.

**A direction question before the angles** goes to the same maintainer, by message: the
question and the frame or plan at its exact revision.

## 3. To the person who accepts it
When every agreement holds at one revision, send one message in the effort's thread with
the person who accepts the report. It is a hand-off, not a card: what they decide is
whether it answers their question.
- first line: "The answer to <the framed question>, for your acceptance";
- second: which claims are disputed or not checked, and which are weak;
- the report's link at its checked revision;
- the answer in three lines, and how sure;
- what it doesn't answer;
- what you need back: their acceptance, or what it still lacks.

Set needs-input (`oats instance attention --message "<one line>"`) and end your turn.

## 4. Their answer
It counts wherever it arrives: a reply, another message, a comment of theirs. Never ask
them to repeat it or post it elsewhere. Clear needs-input either way.
- **It answers their question:** the report has landed. Record it on the effort's record,
  at its revision: `ACCEPTED by <person>, <link>: <their words>`. It is an acceptance of
  that revision only.
- **Not yet the answer,** with why: back to the framing or the angles
  (`/frame-the-question`, "When a report doesn't yet answer it"), and the next revision
  goes through steps 1 to 3 again.

## 5. A new revision
A revision that changes a claim the report leans on, or adds one, gets a fresh verifier
for that claim and a new `CHECKED`; one that changes no claim carries the verdicts once
you have read its delta (`/landing-rules-detail`, "What carries to a new revision"). A
revision that changes or adds a claim after an acceptance goes back to the person who
accepts the report (step 3). Direction people already gave holds through a revision:
nobody is asked to decide it again.

## 6. What is worth keeping
Once it has landed, each finding that will matter for a later decision goes where your
landing rules say, one entry each:
- the finding, as narrow as the report states it;
- its source and date, and the model generation for a finding about agents;
- its check (the verifier's verdict) and its confidence;
- its attribution: the effort, the accepted revision's link, who asked, who accepted, and
  when.

What your knowledge layer requires beyond that (its format, its review), it says. Where
anyone outside the organisation can read that layer, a finding written there is published:
the publishing rule applies to it before you write it (step 7). A finding for another
person's area goes to that area's expert (`/hand-off-and-ask`, "Across people"). The
method's dead ends stay in the report.

## 7. Publishing
Publishing outside the organisation can't be undone, so it is a person's decision: the
person your landing rules name, on one card (`/hand-off-and-ask`), never assumed from
their acceptance, and only for an accepted revision. Before the card, follow
[references/publishing.md](references/publishing.md): the read for what must not leave,
the reader for reports headed outside, and the revision the card names. After their yes,
publish that revision unchanged, as your landing rules say, tell them in one line that it
is out, and record where. A yes to publish never carries to another revision.

**A published report is checked, not assumed.** Say "published" only after you have opened
it where it went and seen that revision there.

## 8. When it has landed
Update the record's status, and act on what the report unblocks. Each finished child
retires itself: check that none is still listed. When your own seat is finished, as
`/wait-and-retire` defines it, retire yourself.
