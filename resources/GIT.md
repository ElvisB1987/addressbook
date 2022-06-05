# Git Merging HOWTO

It is best practice merging changes from `main` into your own branch. To do so, from project's root directory execute in `Command Prompt`:

- `git branch -r`

If you are unable to see all available GitHub branches, execute:

- `git config remote.origin.fetch "+refs/heads/*:refs/remotes/origin/*"`
- `git branch -r`

Next, fetch all changes:

- `git fetch -all`

If this command fails, execute:

- `git update-ref -d refs/tags`
- `git remote prune origin`
- `git fetch -all`

Once all changes are fetched, you are ready to merge changes from `main`:

- `git merge origin/main`
- `git push` (if there are no merge conflicts)
