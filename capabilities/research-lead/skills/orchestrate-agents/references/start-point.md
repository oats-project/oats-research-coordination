# The start point of a child's worktree

A child of a worktree soul that needs a repository's contents (a dataset kept in one, an
analysis to rerun) starts on a new branch at a commit the spawn reads. Check that commit
before you apply, or it works from a stale base.

- **The soul's own repository:** leave out `--repo` and `--base`. The worktree starts at
  the commit the spawn observed on the remote.
- **Another repository:** add `--repo <clone> --base origin/<its default branch>`.
  `--base` names a ref in the clone, read there and never fetched: a bare branch name is
  the clone's local branch, however far behind, and `origin/<branch>` is as fresh as the
  clone's last fetch.

Preview the same command with `--preview` and compare its start point, `from <ref or
repository>@<commit>`, with the remote: `git -C <clone> ls-remote origin <its default
branch>`. If they differ, don't apply:
- for the soul's own repository, the remote moved since the preview: preview again;
- for another, the clone is behind: update its remote-tracking ref, then preview again.
  Name the destination, so the fetch updates that ref whatever branches the clone tracks:
  `git -C <clone> fetch origin refs/heads/<branch>:refs/remotes/origin/<branch>`.

`--same-work` records that the child does your work, and your person's sidebar draws its
line to you. It shares no work tree: each child keeps the work its soul gives it.
