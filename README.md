# EDUCA Website

Simple static website for EDUCA NGO. This repository contains the site pages and assets.

## Structure
- `index.html` — Homepage
- `style.css` — Styles
- `assets/` — Frequently used accessible resources
- `About_Us/`, `Privacy/`, `Projects/`, `Donate/` — Page folders

## Git Terminology (Quick Guide)

- **Repository (repo):** Container for your project files and the full history of changes (the `.git` folder holds metadata).
- **Working Directory:** The files on your computer you edit — the current project snapshot.
- **Staging Area (index):** Temporary area where you place changes you intend to include in the next commit.
- **Commit:** A saved snapshot of staged changes; includes author, message, and a unique hash.
- **Commit Hash:** The unique identifier (SHA) for a commit.
- **Branch:** A movable pointer to a commit; used to develop features independently (e.g., `main`, `feature/x`).
- **HEAD:** The current checked-out commit or branch pointer (what you’re presently working on).
- **Merge:** Combining changes from one branch into another.
- **Fast-forward:** A simple merge where branch pointer just moves forward (no divergent commits).
- **Merge Conflict:** When Git can’t auto-merge differing changes — requires manual resolution.
- **Remote:** A reference to a repository hosted elsewhere (e.g., GitHub). Common name: `origin`.
- **Origin:** Default name for the primary remote repository you cloned from or pushed to.
- **Clone:** Copying a remote repository to your local machine.
- **Fork:** Your own copy of someone else's repo on a hosting service (used to propose changes upstream).
- **Push:** Send your local commits to a remote repository.
- **Pull:** Fetch remote changes and merge them into your current branch.
- **Fetch:** Retrieve commits from a remote without merging them into your working branch.
- **Checkout:** Switch to another branch or commit in your working directory.
- **Tag:** A named pointer to a specific commit (often used for releases).
- **Revert:** Create a new commit that undoes changes from a previous commit (safe, preserves history).
- **Reset:** Move branch/HEAD to another commit; can alter history (use carefully — has modes like `--soft`, `--hard`).
- **Stash:** Temporarily save uncommitted changes to reapply later.
- **Diff:** The set of changes between commits, branches, or working files.
- **Upstream:** The repository/branch you track or intend to merge from (often the original project).
- **Submodule:** A Git repo nested inside another repo (used to include external projects).
- **.gitignore:** File listing patterns Git should ignore (build files, secrets, editor folders).

## Running locally
Open `index.html` in your browser, or run a simple server:

```bash
python -m http.server 8000
```
