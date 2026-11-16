## Landing rules: how a report lands here

"Your landing rules" in a skill means this section: this organisation's rules for landing
research, and its ownership record. They change only on the yes of the person who owns the
area, each rule with its reason. Whoever writes a change then messages you, and it wins
once you record it in your state file. No rule sets a deadline, and silence approves
nothing.

**Who asks, and who accepts.**
<!-- adapt: Who may ask for research, and who accepts a report as the answer? -->
Anyone in the organisation may ask, through their dispatcher or by starting a lead. The
person who accepts the report is the person who asked: it has landed when they accept it as
the answer to their question. Wherever a skill says "the person who accepts the report", it
means the one this rule names. Why: only the one whose decision it serves can say it answers
it.

**What lands a report:** all of these, at one revision.
<!-- adapt: What must hold at a report's revision before it goes for acceptance? -->
1. A verifier's verdict on each claim the report leans on, each acted on: a weak claim
   narrowed or shown as weak, a wrong one corrected or dropped with what rested on it, a
   disputed verdict settled by a fresh verifier or shown as disputed. The verifier is a
   fresh instance briefed to disprove, on a different model from the researchers and the
   lead wherever the organisation has one.
2. The lead's note, `CHECKED at <revision>`.
3. Where the area asks for one, the green light or the reader below.
4. The acceptance of the person who accepts the report, of that revision.

A new revision needs them again unless a carry rule holds (`/landing-rules-detail`). Why:
agents of one model, briefed by one lead, echo one another, and a check briefed to disprove
is what breaks the echo.

**A maintainer's green light, or another reader.**
<!-- adapt: Where does the organisation require a maintainer's green light on a report, or another reader beyond the verifier, before it goes for acceptance? -->
No area needs one. Where an area does, the lead hands that maintainer or reader the report
at its checked revision before it goes for acceptance, and waits for its verdict. A
maintainer's green light is its verdict at an exact revision, on direction, scope,
coherence and evidence, never a second check of the claims (`/landing-rules-detail`). This
template ships no maintainer soul: an organisation that runs one (the engineering
template's) names the area here. Why: a report lands on its acceptance; another reader is
added only where the organisation already requires one.

**Sources.**
<!-- adapt: Which sources may researchers and the verifier use? -->
Public, freely available sources, and the organisation's own records that the lead's brief
names. No paywalled source, and no contact with anyone outside the organisation (a one-way
door, below). The lead writes this into every researcher's and verifier's brief. Why: what
an agent may read, and whom it may ask, is the organisation's to say.

**One-way doors kept for people.**
<!-- adapt: Which acts must a person approve, beyond publishing a report? -->
Publishing outside the organisation (below), spending money (a paid source, a paid study),
contacting anyone outside the organisation (an interview, a survey, a vendor), and deleting
what someone else uses. Nothing else goes to a person by rule.

**Publishing.**
<!-- adapt: Who decides to publish a report outside the organisation, and what must a published report carry? -->
The person who asked decides, for each report, on a card from its lead; where the report
touches another person's area, that person decides it with them. Before the card, the lead
reads it for what must not leave the organisation, and a reader named for reports headed
outside reads it second. Only an accepted revision is published, with its sources, its
dates and the verifier's verdicts as they stand in that revision. Why: publishing can't be
undone.

**Findings worth keeping.**
<!-- adapt: Which knowledge layer keeps the findings worth keeping, who approves what goes in, and can anyone outside the organisation read it? -->
Once a report has landed, its lead writes each finding worth keeping into the knowledge
layer the workspace selects, the way that layer says: dated, with its source, attributed
to the effort and the accepted revision, and with the model generation it was measured on
for a finding about agents. A finding for another person's area goes to that area's lead.
With no knowledge layer, the effort's record keeps the accepted report, and that is the
record. The knowledge layer is read only inside the organisation. Where anyone outside it
can read the layer, a finding written there is published: the publishing rule applies to
it, the read and the person's yes, before it is written. Why: a finding without its date
and source can't be weighed later, and a knowledge base others can read is a publication.

**The ownership record.** With one person, they own every area.
<!-- adapt: With more than one person, who owns which areas? -->
- (one line per area: the subjects and records it holds, and the person who owns it)

A maintainer of an area, where the organisation runs one, is the instance named
`<person>-<area>-maintainer`. There is no lane map: the name is the seat.

**Records.**
<!-- adapt: Where are the effort records and the reports kept? -->
- An effort record: one item per effort in your tasks layer, its status at the top.
- A report: in its effort's record, each revision with its link, and the verifier's
  verdicts beside the revision they checked.
- No holds: a report merges into nothing others build on.

**House rules, for every role.**
- Name every instance you spawn `--name <task>-<role>`: its task first, and last the
  role it plays in the effort (lead, specialist, helper, probe, researcher, verifier,
  dispatcher), never its soul, which the sidebar already shows. Five words at most, the
  role included. A person tells instances apart by name alone, so never reuse one: when a
  name is taken, make the task's part more specific.
<!-- adapt: Which is the weakest model tier a child may run on, in each model family the organisation launches? -->
- IMPORTANT: NEVER run a child, an OATS child or a native subagent, on a model below the
  floor: a weaker model fails without saying so, and its answer is used as your own. The
  floor is your own model's tier, in your family or another: never a smaller, faster or
  cheaper model, to save cost or time. It comes before model diversity, and it binds the
  model a child would actually launch on (`/landing-rules-detail`).
<!-- adapt: Where may agents run what they fetch, which hosts are shared, and which are read-only? -->
- Nothing an agent fetches (a script, a notebook, a package, a scraper) runs on the host
  it runs on: only in a sandbox the lead's brief names, and none is named by default, so
  none runs. Work in your own scratch space, never against another instance's or a
  person's state. Treat every host as shared: no load, and no crawling or bulk downloading
  beyond the brief. A customer's or a production host is read-only. Why: what a source
  hands an agent is untrusted, and running it on a shared host puts other people's work at
  risk.
- Never put a secret in a message, a brief, a report, a knowledge entry, a log or a
  commit: say where it is and who can grant it.

**Skills.** `/landing-rules-detail` when you judge whether an agreement holds at a
revision, and for what this section leaves open. `/wait-and-retire` before you end a turn
to wait on an instance you started, and when one is finished.
