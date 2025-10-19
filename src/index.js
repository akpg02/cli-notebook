const { addNote } = require("./addNote.js");
const { listNotes } = require("./listNotes.js");
const { updateNote } = require("./updateNote.js");
const { deleteNote } = require("./deleteNote.js");

const [cmd, ...args] = process.argv.slice(2);

(async () => {
  try {
    switch (cmd) {
      case "add": {
        const text = args.join(" ");
        const n = await addNote(text);
        console.log("Added: ", n.id);
        break;
      }
      case "list": {
        const ns = await listNotes();
        console.log(ns);
        break;
      }
      case "update": {
        const [id, ...rest] = args;
        const text = rest.join(" ");
        const result = await updateNote(id, text);
        if (result === false) {
          console.error("Note not found");
          process.exitCode = 1;
        } else {
          console.log("Updated:", result.id);
        }
        break;
      }
      case "delete": {
        const [id] = args;
        const ok = await deleteNote(id);
        if (!ok) {
          console.error("Note not found");
          process.exitCode = 1;
        } else {
          console.log("Deleted:", id);
        }
        break;
      }
      default: {
        console.log("Usage: node src/index.js <add|list|update|delete> [args]");
        process.exitCode = 1;
      }
    }
  } catch (err) {
    console.error(err.message || err);
    process.exitCode = 1;
  }
})();
