---
name: hand-off
description: Hand work, a question, a check or a finding to another role - by a message that wakes it, about a finished artefact at its exact reference - resolving the role to the instance already on the effort or a fresh one, and waiting with no deadline. Use whenever anything you made or need goes to someone else, and when you answer one.
---

IMPORTANT: after a compaction, reload this skill before you continue the step.

# Hand off

## What you hand over
Only finished artefacts, at an exact reference: a brief at its revision, a report at its
revision, a finding with its source and date. Never half a problem.

## To whom
Name the role (an area's research lead, a researcher for this angle, the verifier for
these claims), then resolve it:
1. **On the effort.** The effort's record lists who is on it. One listed there that is
   running (`oats status`) gets it.
2. **None.** Start a fresh instance of that role's soul:
   - your researchers, your verifiers and your other probes are your children
     (`/plan-the-angles`, `/check-the-claims`, `/send-a-probe`);
   - an owner for work outside your effort in your person's area (a finding's owner, say)
     is independent of you: `oats spawn <soul> --relation unrelated --purpose <slug>
     --task-file <message.md>`, your message as its task;
   - a role in another person's area: ask that person's dispatcher to start it, with your
     message as the request it reads by its id (`/across-people`); where they have none,
     ask them.
3. **Its name.** Give each new instance a name no instance has had. Never reuse a retired
   instance's name.

## The message
One message, in the effort's thread with that role:
- first line: what you need, and what happens on yes;
- the artefact and its exact reference;
- what you checked and how, and what you didn't;
- the people's decisions it rests on, each as recorded (`DECISION by <person>, <link>:
  <their words>`);
- what you need back: a verdict, an answer, a build.

The effort's record keeps what happened: the report's revisions, the verifier's verdicts,
the acceptance. It never carries the hand-off: no label, no flag and no comment is the
signal.

## Waiting
End your turn; the answer wakes you. No answer has a deadline, and nothing goes ahead by
default.
- **A child** you wait on gets its checkpoint, which watches for a stalled instance
  (`/plan-the-angles`, "Set a checkpoint before you wait").
- **Whenever something else wakes you,** look at what you wait on. A recipient that retired
  without answering gets the message again, through step 2. One that stopped: tell whoever
  can start it (its parent, or its person).
- **A person:** set needs-input (`oats instance attention --message "<one line>"`) and
  clear it (`--clear`) when they answer. Never set a timer on a person.

## Answering one
Answer in the same thread, at the reference you were given. If it moved under you, say so
and answer at the new one.

Taken from the engineering template's engineering-expert, template-v2.1.0; changed where it
named a pull request, a developer or a maintainer.
