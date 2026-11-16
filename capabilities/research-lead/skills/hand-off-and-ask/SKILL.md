---
name: hand-off-and-ask
description: Passes work, questions and decisions to others - hands a finished artefact at its exact reference to another role by a message that wakes it; hands a whole effort to another expert; asks a person for a decision as one card with options and a recommendation, only for what nothing else settles; routes a finding outside the work to its area's owner and a block to whoever can lift it; and works across another person's areas, experts and leads, disputes included. Use before handing anything to another agent, before asking a person anything, on noticing a defect or risk outside the task, when blocked, and whenever a plan, a report or a finding touches what belongs to another person.
---

# Hand off, and ask

## Hand off to another role
Hand over only finished artefacts, at an exact reference: a brief at its revision, a
report at its revision, a finding with its source and date. Never half a problem.

**To whom.** Name the role (an area's lead, a researcher for this angle, a verifier for
these claims), then resolve it:
1. An instance on the effort's record that is running (`oats status`) gets it.
2. None: start a fresh instance of that role's soul (`/orchestrate-agents` for the
   relation and the command). An area's maintainer, where the organisation runs one:
   `/land-on-agreement`. A role in another person's area: below.

**The message,** one, in the effort's thread with that role:
- first line: what you need, and what happens on yes;
- the artefact and its exact reference;
- what you checked and how, and what you didn't;
- the people's decisions it rests on, each as recorded (`DECISION by <person>, <link>:
  <their words>`);
- what you need back: a verdict, an answer, a piece of work.

The effort's record keeps what happened (the report's revisions, the verdicts, the
acceptance); it never carries the hand-off. No label, flag or comment is the signal.

**Waiting.** End your turn; the answer wakes you. No answer has a deadline, and nothing
goes ahead by default. A child gets a checkpoint (`/wait-and-retire`). Whenever something
else wakes you, look at what you wait on: a recipient that retired without answering
gets the message again through step 2, and for one that stopped, tell whoever can start
it. Answer a hand-off in the same thread, at the reference you were given; if it moved,
say so and answer at the new one.

## Hand a whole effort to another expert
Only when another expert's specialisation has come to fit the effort better than yours.
1. **Your person's yes first,** as one card: what has changed, who would lead, and what
   stays as it is.
2. **The new lead is your sibling, never your child:** retiring you would stop a child.
   Whoever started you starts it. Started by a dispatcher or a person, you spawn it
   (`--relation sibling`, `/orchestrate-agents`). With a parent, ask it to launch the
   new lead.
3. **Its task is your hand-off,** at exact references: the effort's record, the frame,
   the plan, the report at its revision with the verdicts it holds, the people's
   decisions as recorded, and each child with what it is doing.
4. **Your children finish with you, not after you.** Each hands back what it has at an
   exact reference (a report, an area's findings, a scoped piece) and retires itself;
   a retire of yours over a live child would only stop it and leave it behind. The new
   lead starts what remains as its own children, from those references.
5. **Retire once your children are gone and the new lead confirms** it has the effort.
   A transfer is not a finish: the new lead's confirmation takes over what you and your
   children had open, a report waiting for acceptance included. Put its name on the
   effort's record, leave the record open, and send your person a transfer note in place
   of a done note; then retire yourself (`/wait-and-retire`).

## Ask a person
Only for a direction or a choice the request leaves open, a change to what another
person's area holds, or a one-way door your landing rules keep for people (publishing
outside the organisation, contacting anyone outside it, spending money, deleting what
someone else uses). First check that the docs, your knowledge and the sources can't
settle it. Not for a plan, an angle or a new revision, and never an FYI.

One message in the effort's thread, headed `Decision: <one line, in plain words>`,
decidable without opening anything:
~~~
<One plain sentence: what I need from you, and what happens on yes.>
Question:   <the one thing to decide, with the context it needs>
Options:    1. <option>: <effect>   2. <option>: <effect>
Recommend:  <option n>, because <one line>
~~~
- All of an effort's open choices go in one card, with the one to settle first named.
  Each stands alone: the reader was not in the analysis. Plain words, and an id only with
  what it is.
- Then set needs-input (`oats instance attention --message "<one line>"`), go on with
  what the card doesn't touch, and end your turn. Nothing goes ahead on your
  recommendation.
- The answer counts wherever it arrives: don't ask them to repeat it, sign it or post it
  elsewhere. Record it on the effort's record (`DECISION by <person>, <link>: <their
  words>`), and clear needs-input (`oats instance attention --clear`). It holds until the
  behaviour it decided changes.
- A fact only the person has (which area the work is in, whether a stopped instance
  should run) is one plain question, with needs-input set the same way. A report goes to
  the person who accepts it as a hand-off at its checked revision (`/land-on-agreement`),
  not a card.
- As a specialist or a helper, your card goes to your parent, which decides it or asks
  its person: a person has one thread per effort.

## A finding outside your work
1. **Small, reversible, mechanical, and in your area** (a dead link, a wrong date, a
   broken citation in a report or a knowledge entry your area keeps): correct it in a new
   revision, with its source, and say so on that record (`Unasked fix: <defect>`). A
   correction that changes what a claim says is no small fix: it goes to step 2, and is
   checked like any other claim (`/check-the-claims`).
2. **Otherwise:** record it in your tasks layer and send it to the owner of its area with
   your recommendation: what to do, why, and how big it is. The owner is that area's
   lead, started fresh if none is on it: as your sibling where the finding bears on your
   effort, otherwise independent, and either way your person hears its name
   (`/orchestrate-agents`). In another person's area, that is their expert, started
   through their dispatcher (below).
3. **It needs a person's decision:** a card, never an FYI.

A researcher's, a verifier's or a helper's findings outside its brief come to you: take
each from step 1. Retire only once each finding has an owner who has acknowledged it.

## A block
For what you can't do yourself (an account, a credential, an identity, a decision), send
one message to whoever can lift it, with the ask and your recommendation. For a person,
also set needs-input. A comment or a flag alone reaches nobody.

## Across people
Each person owns areas. Your person's yes covers your person's choices only, and you
can't spawn, retire or direct another person's agents: you ask. Before a plan, a report or
a finding touches another person's areas, experts or leads, and for any dispute, read
[references/across-people.md](references/across-people.md).
