# 🧩 Pull Request — CLI Notebook

## 📝 Summary

This PR enhances the CLI Notebook project by adding the remaining CRUD operations (`update` and `delete`), improving CLI usability, expanding test coverage, and setting up continuous integration (CI) with GitHub Actions.

It also introduces a reusable PR template for future contributions and expands the documentation in the README.

## 🚀 Changes

### New Features

- Added `src/updateNote.js` - supports updating note text and adds `updatedAt` timestamp.
- Added `src/deleteNote.js` - deletes notes safely and returns success/failure status.
- Updated `src/index.js` - now handles `add`. `list`, `update`, and `delete` commands with improved eror handling and messages.

### Tests

- Added `tests/updateNote.test.js` - validates note updates, handles empty text, and non-existent IDs.
- Added `tests/deleteNode.test.js` - verifies deletion success/failure and preserves unaffected notes.
- Confirm all tests pass via Jest

## Developer Experience

- Added `github/workflows/ci.yml` - runs Jest automatically on every push/PR.
- Added `.github/PULL_REQUEST_TEMPLATE.md` — standardizes PR formatting and review process.
- Added `.nvmrc` for Node 20 consistency.
- Updated `package.json` scripts for better local DX:

  ```json
  "scripts": {
    "start": "node src/index.js",
    "test": "jest --runInBand",
    "notes:add": "node src/index.js add",
    "notes:list": "node src/index.js list",
    "notes:update": "node src/index.js update",
    "notes:delete": "node src/index.js delete"
  }
  ```

## Documentation

- Expanded README.md with new CLI examples:

  ```bash

  node src/index.js add "Buy oat milk"
  node src/index.js list
  node src/index.js update <id> "Buy oat milk and bread"
  node src/index.js delete <id>

  ```

- Added Quickstart guide and Node requirement notice.

## ✅ Checklist

| Category                          | Status |
| --------------------------------- | ------ |
| Builds and runs locally           | ☐      |
| All Jest tests pass               | ☐      |
| README updated                    | ☐      |
| CI workflow runs successfully     | ☐      |
| No secret or .env files committed | ☐      |
| PR template loads automatically   | ☐      |

## 💻 How to Test

```bash

npm ci
npm test

node src/index.js add "Example"
node src/index.js list
node src/index.js update <id> "New text"
node src/index.js delete <id>
```

Expected Output:

```makefile

Added: <uuid>
Updated: <uuid>
Deleted: <uuid>

```

## Review Focus

- Verify CommonJS usage (`require`, `module.exports`) consistency.

- Confirm CLI outputs clear, user-friendly messages.

- Ensure test coverage for both success and failure cases.

- Confirm CI workflow runs green on GitHub.

## 🧭 Merge Strategy

- Base branch: `main`

- Merge type: Squash and merge

- Post-merge tag: `v0.2.0`

  ```bash
  git tag v0.2.0 -m "Add update/delete commands, tests, CI, PR template"
  git push origin v0.2.0

  ```

  ### Tag a release after mergin the PR

  ```bash

  git tag v0.2.0 -m "Add delete/update commands with tests"
  git push origin v0.2.0

  ```
