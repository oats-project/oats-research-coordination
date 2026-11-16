# Find the area's maintainer

A maintainer is called by message at an exact reference: for its green light on a report
where the area's landing rules ask for one, and for a direction answer before the angles.
It is never in your research loop. This template ships no maintainer soul: where an
organisation runs one, it is usually the engineering template's maintainer, adapted to
read reports, and its landing rules name the areas that ask for it.

There is no lane map. Your landing rules name the areas and who owns each, and an area's
maintainer is found by its instance name: `<person>-<area>-maintainer`, for the person
who owns the area (where several own it, your own person when they are among them,
otherwise the first owner named), or, after a retired one, by its numbered successors
(`<person>-<area>-2-maintainer`, `-3-` and on). Look for the name and its successors:
- `oats status --json`: this machine, each instance with its soul, running or stopped;
- across machines, your messaging layer's roster, by name.

The one of them not retired is the maintainer.

Then:
- **Running:** call it.
- **Stopped, or known but not active:** message it anyway (messages wait), and tell its
  person it is stopped, so they can start it.
- **Named on the roster with nothing running anywhere you can see:** it may be retired,
  or run where you can't look. Ask its person before you start one. After a retired
  one, the next takes the next count before the role: a name is used once.
- **None:** where the workspace has a maintainer soul, start one for your own person,
  without asking, independent of you so your retirement can't stop it, under the first
  name none has had (the unnumbered one, or the next count after the last retired one):
  ```bash
  oats spawn <maintainer soul> --relation unrelated --name <that name> --task-file <brief.md>
  ```
  The name is the seat. A spawn refused because the name is taken: check whether that
  name's instance is live (`oats status --json`, the roster). If it is, it is the
  maintainer: call it, and start none under another name. Only if it is retired, take the
  next count.
  Brief: "maintainer for <person> in <area>; first call: <your instance> asks for the
  green light on <the report> at <revision>, or for an answer on <the question, at its
  revision>". Then tell
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
