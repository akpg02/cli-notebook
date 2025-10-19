# CLI Notebook

Summary: A tiny Node.js app that save a list of notes as JSON files. Notes are created using the command line.

## Tech Stack

- Node.js
- Jest unit tests for test

## Getting Started

### 1. Clone & Install

```bash
git clone git@github.com:akpg02/cli-notebook.git
cd cli-notebook
npm i
npm test
node src/index.js add "Buy oat mild"
node src/index.js list
node src/index.js update
node src/index.js delete
```

- Exit with non-zero code on invalid usage:

```js
if (!["add", "list", "update", "delete"].includes(cmd)) {
  console.log("Usage: node src/index.js <add|list|update|delete> [text]");
  process.exitCode = 1;
}
```

### 2. Testing

Run all tests:

```

npm test

```

### 3. CLI Commands

```

node src/index.js add "Buy oat milk"
node src/index.js list
node src/index.js update <paste-id-here> "Buy oat milk and bread"
node src/index.js delete <paste-id-here>

```

## Design Notes

- Why JSON files are used to store the notes? This mini application is simplified to focus on the JavaScript programming language. A database may be added later or in future projects.
- Error handling is enforced for invalid note entries.
- Unit testing has been implemented for the add, delete, update and list endpoints of this command line application.


