---
name: check-the-claims
description: Have the claims a report leans on checked by the verifier - a fresh instance briefed to disprove, on a different model from every researcher and from you where the organisation has one, given the claims and their cited sources at the report's revision and not your reasoning - then act on its verdict per claim (holds, weak or wrong), and send a fresh verifier for any claim a revision changes or adds. Use before a report goes for acceptance, and for every revision that changes or adds a claim it leans on.
---

IMPORTANT: after a compaction, reload this skill before you continue the step.

# Check the claims

The verifier is a role, not an option. Researchers of one model, briefed by one lead,
reading the same few sources, agree partly as an echo: their agreement is not a check. A
fresh instance briefed to disprove the claims is. You never check your own claims, and no
researcher checks its own.

## 1. The claims the report leans on
List the claims the report's answer rests on: the ones that, if wrong, would change the
decision the frame names. Each as the report states it, with the source it cites (its
link, its date, the figure or passage), at the report's revision. A claim the answer
doesn't rest on needs no verifier, but the report says which claims were not checked.

## 2. The verifier's model
Different from every researcher's and from yours, where the organisation has one
(`/plan-the-angles`, "Pick the models"). If you can't establish a difference, use the
effective one and say so in the report's limits.

## 3. Send it
The verifier is your child, the brief its task, with a name no instance has had:
```bash
oats spawn verifier --parent "$OATS_INSTANCE" --same-work --purpose <check-slug> --task-file <claims.md>
```
Add `--harness <h> --model <m>` (or a launch configuration) only where step 2 needs another
model than the effective one. The brief holds exactly:
1. the question as framed, in two or three sentences;
2. the claims, numbered, each with its cited source, at the report's revision;
3. the sources it may use, as your landing rules say;
4. what to return: a verdict per claim (holds, weak or wrong) with its evidence, and each
   claim it couldn't check, with why;
5. who to report to (you), and how (your messaging layer, if any).

Leave out the researchers' reports, your reasoning, what you think is risky, how confident
you are and which claims you doubt: it reads the sources itself. It may ask you for a
fact. A long list may go to more than one verifier, each with claims of its own.

Before you wait, set its checkpoint (`/plan-the-angles`, "Set a checkpoint before you
wait").

## 4. Act on each verdict
- **Holds:** the claim stays, its check noted beside it.
- **Weak:** narrow the claim to what its evidence supports (restore the dropped qualifier,
  population, version or condition), or show it as weak, with why, and lower its
  confidence.
- **Wrong:** correct it from the evidence, or drop it, and follow what it changes: a
  conclusion that rested on it changes too, even one already sent to the person who accepts
  the report, and you tell them so in the effort's thread.
- **Couldn't check:** say so in the report, beside the claim.
- **A verdict you think is wrong** is not yours to overrule: you are the claim's author.
  Send the claim, the verifier's evidence and your reason to a fresh verifier, whose
  verdict stands, or show the claim in the report as disputed, with both sides' evidence.

Every correction is a new revision, and a claim it changes or adds goes to a fresh verifier
(`/land-on-agreement`, "A new revision"), never back to the one that checked the old
wording. Once every claim the report leans on has its verdict at one revision, write
`CHECKED at <revision>` (`/land-on-agreement`, "Checked").

## 5. Retire it
Once its verdict is in and your questions about it are answered, retire it
(`/land-on-agreement`, "Retire what's finished").
