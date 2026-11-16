# Find the area's maintainer

A maintainer is called by message at an exact reference: for its green light on a report
where the area's landing rules ask for one, and for a direction answer before the angles.
It is never in your research loop. This template ships no maintainer soul: where an
organisation runs one, it is usually the engineering template's maintainer, adapted to
read reports, and its landing rules name the areas that ask for it.

There is no lane map. Your landing rules name the areas and who owns each, and an area's
maintainer is found by its instance name: `<person>-<area>-maintainer`, for the person
who owns the area (where several own it, your own person when they are among them,
otherwise the first owner named). A name is used once, so after a retired holder the next
one carries a count before the role: `<person>-<area>-2-maintainer`, then `-3-`. Look for
every name of that family:
- `oats status --json`: this machine, each instance with its soul, running or stopped;
- across machines, your messaging layer's roster, by name.

Then:
- **One is running:** call it.
- **One is stopped, or known but not active:** message it anyway (messages wait), and
  tell its person it is stopped, so they can start it.
- **More than one is running or stopped:** ask your person which holds the seat, and
  start none.
- **Named on the roster with nothing running anywhere you can see:** it may be retired,
  or run where you can't look. Ask its person before you start one.
- **None:** where the workspace has a maintainer soul, start one for your own person,
  without asking, independent of you so your retirement can't stop it:
  ```bash
  oats spawn <maintainer soul> --relation unrelated --name <person>-<area>[-<count>]-maintainer --task-file <brief.md>
  ```
  The name is the first of the family that no instance has had. The kernel doesn't
  refuse a retired instance's name, so check each in order before you spawn: `oats
  instance events <name>` lists a used name's events, a `retired` one among them, and
  says "no instance" for a name never used on this machine; a name the roster still
  lists is used too. A spawn refused because the name is taken means a holder is running
  or stopped: find it, and start none under another name. Brief: "maintainer for
  <person> in <area>; first call: <your instance> asks for the green light on <the
  report> at <revision>, or for an answer on <the question, at its revision>". Then tell
  your person, in two or three plain sentences, what you started: "I started <name>, your
  maintainer for <area>. A maintainer is the standing agent for an area: it holds the
  area's direction across efforts and answers the calls its landing rules name. You
  retire it with `oats retire <name>`."
  As a specialist, tell your parent instead. In another person's area, ask their
  dispatcher to start it, or them where they have none (`/hand-off-and-ask`, "Across
  people").
  Where the workspace has no maintainer soul, ask your person and spawn none.

When you can't tell the area or its owner, ask your person; meanwhile go on with the
work, but call and start none. Call the area's maintainer, never all of them.
