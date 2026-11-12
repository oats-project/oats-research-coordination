---
name: hand-off
description: Hand work, a question, a check or a finding to another role - by a message that wakes it, about a finished artefact at its exact reference - resolving the role to the instance already on the effort or a fresh one (your helpers as your children, another area's step of your effort to a helper and never a second lead, a related effort's lead as your sibling and an unrelated one independent, with your person told its name at once), and waiting with no deadline. Use whenever anything you made or need goes to someone else, and when you answer one.
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
   - your researchers, your verifiers and your other helpers are your children
     (`/plan-the-angles`, `/check-the-claims`, `/send-a-helper`), spawned with
     `--same-work`: it records that they do your work, and your person's sidebar draws
     their line to you. It shares no work tree: each keeps the work its soul gives it;
   - another area's work that your effort needs stays in your effort: a helper of that
     area's soul, as your child, never a second lead (`/send-a-helper`, "Another area's
     work in your effort");
   - a lead for another effort in your person's area: a follow-on question, a finding that
     needs a lead of its own, work your person asks to be tracked apart. How it relates to
     you depends on whether the effort is related to yours:
     - **Related:** a continuation or follow-on of your effort, or a discovery that bears on
       what you were researching. Say the pricing effort finds that no source measures
       churn on switching for products like yours, and that question deserves research of
       its own: its lead is your sibling.
       ```bash
       oats spawn <soul> --relation sibling --relative-to "$OATS_INSTANCE" \
         --name <effort-slug>-lead --task-file <message.md>
       ```
       The two show together in your person's status and sidebar, and it outlives your
       retirement, which a child would not. A sibling records no parent, so it takes no
       `--same-work`: the kernel refuses the flag there. Only a root lead, one with no
       parent (a dispatcher or a person started it), spawns the sibling itself: a sibling
       takes its anchor's parent, so yours would become your parent's child without your
       parent starting it. With a parent, tell it about the second effort instead.
     - **Unrelated:** a finding with nothing to do with your effort's subject. Say the
       same effort notices that a report in the knowledge layer cites a withdrawn dataset:
       its owner is independent of you, `oats spawn <soul> --relation unrelated --name
       <effort-slug>-lead --task-file <message.md>`.

     Either way your message is its task, and the new effort gets its own record, linked
     from yours and back. Tell your person at once, in your effort's thread, in one
     message: the new lead's exact instance name, what it leads, its record's link, and
     that they talk to it in that effort's thread. Add the new effort to your status line;
   - a role in another person's area: ask that person's dispatcher to start it, with your
     message as the request it reads by its id (`/across-people`); where they have none,
     ask them.
3. **Its name.** `<task>-<role>`: the task first, and last the role it plays in the
   coordination (lead, researcher, verifier, helper, specialist, dispatcher), never its
   soul, which the sidebar already shows (`churn-study-lead`). Keep it short: five words at
   most, the role included. Give each new instance a name no instance has had, never a
   retired one's: when the name is taken, make the task's part more specific.

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

Taken from the engineering template's engineering-expert, template-v3.1.3; changed where it
named a pull request, a developer or a maintainer.
