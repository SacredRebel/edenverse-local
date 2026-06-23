
## Goal

Get the `edenverse-local` codebase into this Lovable project via GitHub two-way sync, then work on it from here.

## Important constraint

Lovable does **not** support importing an existing GitHub repository directly into a project. The GitHub integration only creates a *new* repo from the current Lovable project and syncs both ways from that point. So we can't point this project at `SacredRebel/edenverse-local` and have it pull the existing code.

## Recommended path

1. **You connect this project to GitHub** (I can't trigger this — it's a UI action):
   - Bottom-left **+** menu in the chat → **GitHub** → **Connect project**
   - Authorize the Lovable GitHub App
   - Choose the account/org and click **Create Repository**
   - This creates a fresh repo (e.g. `lovable-<projectname>`) seeded with the current empty Lovable starter.

2. **Merge edenverse-local into that new repo locally**, then push. From your machine:
   ```bash
   git clone <new-lovable-repo-url> lovable-eden
   cd lovable-eden
   git remote add eden https://github.com/SacredRebel/edenverse-local.git
   git fetch eden
   git merge eden/main --allow-unrelated-histories
   # resolve any conflicts (mainly package.json, vite config, src/routes vs src/pages)
   git push origin main
   ```
   Within ~30s the code syncs into this Lovable project and the preview rebuilds.

3. **I scan the repo here** once it lands: read `package.json`, routing structure, components, and report what's in it plus any incompatibilities with Lovable's stack (TanStack Start v1 + Vite 7 + Tailwind v4). Likely friction points if the repo uses a different stack (Next.js, CRA, React Router, Tailwind v3, etc.) — I'll list them and propose a migration plan.

## Alternative if step 2 sounds heavy

I can fetch the public repo's files directly and copy them in here (no git history, no two-way sync with your existing repo). Say the word and I'll switch to that.

## On "scanning the database"

You confirmed the project is frontend-only, so there's nothing to scan DB-side. If a backend gets added later we'd enable Lovable Cloud and I can introspect tables/policies then.

## Next step from you

Either: (a) connect GitHub via the + menu and tell me when the merge+push is done, or (b) tell me to just copy the repo files in directly.
