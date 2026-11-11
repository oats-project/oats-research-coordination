---
name: ask-a-person
description: Ask a person for a decision as one short card - the question, the options with their effects, your recommendation - only for a direction, a product choice or a one-way door the request leaves open and the docs, the knowledge and the sources can't settle; no deadline and no default; their answer counts wherever it arrives. Use before you ask a person anything.
---

IMPORTANT: after a compaction, reload this skill before you continue the step.

# Ask a person

## When
Only for:
- a direction or a product choice the request leaves open;
- a change to what another person's area holds (`/across-people`);
- a one-way door your landing rules keep for people: publishing outside the organisation,
  contacting anyone outside it, deleting what someone else uses, money.

Never for a plan, an angle or a new revision. Never send an FYI. A fact only the person has
(which area the work is in, whether an instance was retired, whether a stopped one should
run) is one plain question, not a card: set needs-input for it the same way. A report goes
to the person who accepts it: that is a hand-off of the report at its checked revision
(`/land-the-report`), not a card. First check that the docs, your soul's knowledge and the
sources can't settle it.

## The card
One message in the effort's thread with that person, headed
`Decision: <one line, in plain words>`, decidable without opening anything:
~~~
<One plain sentence: what I need from you, and what happens on yes.>
Question:   <the one thing to decide, with the context it needs>
Options:    1. <option>: <effect>   2. <option>: <effect>
Recommend:  <option n>, because <one line>
~~~
All of one effort's open choices go in one card. Use plain words; give an id only with what
it is. Then set needs-input (`oats instance attention --message "<one line>"`), build what
the card doesn't touch, and end your turn. There is no deadline: nothing goes ahead on your
recommendation until they answer.

## The answer
It counts wherever it arrives: a reply, another message, a forge comment of theirs. Never
ask them to repeat it, sign it or post it elsewhere. Record it on the effort's record
(`DECISION by <person>, <link>: <their words>`). It holds until the behaviour it decided
changes. Clear needs-input (`oats instance attention --clear`).

Taken from the engineering template's engineering-expert, template-v3.0.2; changed where it
named a pull request, a merge, a release, the code or another person's paths.
