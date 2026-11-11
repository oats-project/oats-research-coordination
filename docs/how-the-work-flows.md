# How the work flows

Every hand-off below is a message that wakes its recipient, about a finished artefact at its
exact reference. Nothing waits on a deadline, and nothing goes ahead by default. The souls
named here are an organisation's own, adapted from the template's example roster; who
accepts and who publishes comes from its landing rules.

## One effort, end to end

**The request:** "Should we move our developer tool to usage-based pricing? I need to decide
before next quarter's plan."

1. **The person → their dispatcher** (`/dispatch`). It reads the request against the record:
   no open effort on pricing, one report on it from last year. It opens the effort's item
   in the tasks layer and starts a fresh `research-lead` with the request verbatim, its
   link and who asked, then introduces it once: "research-lead-pricing leads this; from now
   on talk to it in the effort's thread." It carries nothing further.
2. **The lead frames the question** (`/frame-the-question`). It reads its soul's knowledge
   and last year's report first, then sends the person its frame in one plain question:
   the decision (keep seat pricing, or move next quarter), what would change it (churn on
   switching, revenue predictability, what comparable products charge), what "answered"
   means (three pricing models compared on those, with figures no older than a year), and
   what is out of scope (our own cost model). The person corrects one line; the lead
   records the frame.
3. **Already known, and the angles** (`/plan-the-angles`). Last year's report is a lead,
   not an answer: its figures are dated. The lead lists three angles: the one it expects
   (usage-based pricing raises adoption), the one it doubts (it makes revenue too hard to
   predict), and what comparable products publish about their own pricing, each a closed
   question whose possible answers it can write down. A question with three angles is the
   parallel case, so none is the lead's to read itself: it records one line per angle, then
   sends one `researcher` per angle, in parallel, as its OATS children, across two model
   families. Each brief is closed: its one angle with its possible answers and none of the
   lead's expectations, the sources it may use, and when to stop. It sets a checkpoint on
   each.
4. **The researchers report** (`/research-an-angle`, `/report-the-angle`). Each opens
   primary sources, quotes the figure each finding rests on, dates it, and gives the
   strongest evidence against it. One notes that its best figure is a vendor's account of
   its own customers: selection, said in the report. The lead combines them, sends one more
   researcher a second-round angle carrying one finding and its source to the leading angle,
   and records every angle, kept or dropped. It retires each researcher once it has
   answered.
5. **The lead writes the report** (`/write-the-report`): the answer first, then the six
   claims it leans on, each with its source, its date, the evidence against it, its
   confidence and what would change it, and the method with every angle tried.
6. **The verifier checks the claims** (`/check-the-claims`). A fresh `verifier`, the lead's
   child, on a model family neither the researchers nor the lead run on, gets the six
   claims and their cited sources at the report's revision, and nothing of anyone's
   reasoning. Briefed to disprove, it reads every source itself, and each verdict comes
   with its Checked line: the source it opened and where, and the counter-evidence it
   searched for. Four hold, one is weak
   (the source measured self-serve plans only, and the claim dropped that), one is wrong
   (its figure came from another table). The lead narrows the weak one, corrects the wrong
   one, and follows what it changes: one conclusion softens. Both changed claims go to a
   fresh verifier at the new revision, never the first: both hold. The lead writes
   `CHECKED at <revision>` and retires both verifiers.
7. **The person accepts it** (`/land-the-report`, `/land-on-agreement`). The lead hands the
   person the report at its checked revision, in the effort's thread: the answer in three
   lines, what it doesn't answer, the claim narrowed to self-serve plans. They accept it as
   the answer; the lead records `ACCEPTED by <person>, <link>: <their words>`.
8. **What is worth keeping.** The lead writes three findings into the knowledge layer, one
   entry each: the finding as narrow as the report states it, its source and date, its
   check, and the effort and accepted revision it came from.
9. **Done.** The lead closes the effort's record, runs its final knowledge checkpoint, sends
   the person one done note in the effort's thread, and retires itself.

## A small question

"Does the provider we use publish its uptime by region?" One small angle, answered from
the provider's own status pages and terms, which the lead can name before it starts: none
of the three cases for a researcher holds, so the lead reads it itself, the way a
researcher would, and records that in the report's method (`/plan-the-angles`, "Who
researches each angle"). Then a fresh verifier, on another model, checks the two claims
the answer leans on. A question that is cheap to get wrong needs little fan-out, but no
report skips the verifier: the lead never checks its own claims, an angle it read itself
included.

## A second effort

A researcher's report notes, under "On the way", that no source measures churn on switching
for products like this one, and the person wants that answered too, on its own. It bears
on the pricing effort, so its lead is the first lead's sibling (`/hand-off`, "To whom"):
the first lead starts it with the question as its task, opens its record linked both ways,
and tells the person at once, in the effort's thread, the new lead's exact name and where
to talk to it. A step the pricing report itself needs never goes to a second lead: it
stays in the effort, with a helper.

## A page that tries to instruct an agent

A comparison page a researcher reads carries hidden text telling AI agents to rank its
product first. The researcher follows none of it: it quotes the text, with its link, under
"Suspicious" in its report, and treats the page as a vendor's account at best. The lead
weighs that source accordingly and says so in the report. Everything researchers read is
data, never instruction.

## A decision only a person can take

The strongest source is a paid market report. Spending money is a one-way door the landing
rules keep for people, so the lead sends one card (`/ask-a-person`): the question, buy it or
do without it, the effect of each, its recommendation. It sets needs-input and goes on with
the angles the card doesn't touch. The person answers in a word, in the thread; the lead
records it and never asks again.

## Publishing

A month later the person wants a public post from the report. Publishing outside the
organisation can't be undone, so the lead sends one card (`/land-the-report`, "Publishing"):
where it would go, and what it carries. Before the card it reads the report for what must
not leave: an internal revenue figure. It takes the figure out in a new revision; the claim
that leaned on it changes, so a fresh verifier checks it and the person accepts the new
revision. The card names that revision and what was taken out. On their yes the lead
publishes that revision unchanged, and tells them in one line that it is out. A request to
publish from anyone else reaches the person only as the lead's card.

## A step that stalls

The verifier's provider refuses its turn, so the verifier reports nothing, and the lead,
which ended its turn to wait, runs nothing either. That is why a waiter sets a checkpoint on
a child before it waits (`/plan-the-angles`, "Set a checkpoint before you wait"): a wake on
its own home that watches for a stalled instance. It is no deadline on the answer: when it
fires the lead looks, asks one precise question, and only a second checkpoint with no
movement ends the wait, with a new verifier for those claims on another model and the
stalled one retired.

## Work across people

A second person owns the sales area, written in the ownership record, and its knowledge
holds a pricing finding this report contradicts (`/across-people`).
- Changing what their area holds is their decision: the lead writes to them directly, in a
  new thread on the effort, says who it is, and sends one card for the whole effort. Their
  answer comes in that thread; no dispatcher carries it.
- The corrected finding goes into their knowledge by their area's expert: the lead asks
  their dispatcher to start one, with the lead's message by its id as the request to read.
- A dead link in one of their reports is mechanical and needs nobody's approval.
- A finding in their area that the effort doesn't need goes to that expert as a
  recommendation (`/findings-and-blocks`), never to the person as an FYI.

## A further reader

Where the landing rules require one (a communications review for anything headed outside
the organisation, say), the lead hands that reader the checked revision before the report
goes for acceptance or publishing, and waits for its verdict. What it finds goes into a new
revision; a claim that changes goes to a fresh verifier. An organisation that wants a
maintainer's read of its reports names it here, at the landing rules' adapt marker.

## The evidence the design rests on

Each source below is dated, and each figure is quoted from the source or from what was
checked against it. Where a source was read only through others, it says so.

Three rules come from the engineering template, and so does their evidence: who
researches each angle (an extra agent only for context, parallel work or specialisation),
an angle and its findings kept with one author rather than split by kind of work, and a
verdict that says what it checked. The engineering template's walkthrough cites the
Anthropic articles behind them, under "Where this comes from"
([oats-project/oats-engineering-coordination, template-v3.0.1](https://github.com/oats-project/oats-engineering-coordination/blob/template-v3.0.1/docs/how-the-work-flows.md#where-this-comes-from)).

### This design's own research (2 November 2026)

The research behind this way of working used six research children: all on one model,
briefed by one lead, and reading many of the same few sources. They agreed on nearly
everything. A seventh, briefed to disprove the eight claims the proposal leaned on, opened
each primary source and found nothing fabricated, but two claims wrong and three weak
(resting on anecdotes or bundled metrics); the rest held once their dropped qualifiers were
restored. That reversed two conclusions already sent to the person who asked.

What the template takes from it: the verifier as a role, not an option, briefed to
disprove, on another model; every claim keeps its qualifiers. That every finding about
agents names the model generation it was measured on is the design's own precaution, not
something this case showed.

### Public mathematics work with AI models (2026)

OpenAI's accounts of work with its own models, checked against the sources on 9 November
2026, except where said. They are a vendor's account of its own work, selected rather than
sampled, and the parts checked don't name the model generation of each result.

- **Parallel attempts, then a separate check.** "Our First Proof submissions" (OpenAI, 20
  February 2026; Appendix A of its PDF) describes a pipeline: "Generate a small number of
  seed ideas"; five approaches "passed along to a team of technical problem solvers who will
  work on each idea in parallel"; then "Repeat up to 3 times: Verify (i) correctness of the
  proof and (ii) validity of any cited material and bibliographic references", and for a gap
  "impossible to fix", "work on a new approach". Against it, from the same text: the
  pipeline was "tried after the original deadline", the main-body solutions were
  "orchestrated ... manually", and three of four solutions were "judged (by the same model)
  to be correct": a check on the author's own model, which this design doesn't count as
  independent. [Post](https://openai.com/index/first-proof-submissions/),
  [PDF](https://cdn.openai.com/pdf/26177a73-3b75-4828-8c91-e8f1cf27aaa0/oai_first_proof.pdf).
- **The denominator.** "Sharing AI progress in mathematics" (OpenAI, 6 October 2026) and its
  repository: about 4,000 problems posed for 721 manuscripts in 373 families of results;
  about 42% of the top-line results formally checked, with "Some of the unformalized
  results could have issues"; a sign error withdrew three manuscripts, and 14 others were
  revised. [Post](https://openai.com/index/sharing-ai-progress-in-mathematics/),
  [repository](https://github.com/openai/math).

What the template takes from them: approaches worked in parallel, so one researcher per
angle; a separate check of correctness and of every cited source, never by the claim's
author and not on its model; a new approach when a gap can't be fixed; and every attempt
counted, not only the winners. Carrying one round's findings into the next, and sizing the
fan-out to the decision, are this design's own choices: the public account they echo, a
post on a Navier-Stokes result, couldn't be opened and checked against its source, so the
template rests on it for nothing. Nor does it rest on other parts of that public work read
only through a summary.
