const { addNote } = require("./addNote.js");
const { listNotes } = require("./listNotes.js");
const { updateNote } = require("./updateNote.js");
const { deleteNote } = require("./deleteNote.js");

const [cmd, ...args] = process.argv.slice(2);

async () => {
  if (cmd === "add") {
    const text = args.join(" ");
    const n = await addNote(text);
    console.log("Added: ", n.id);
  } else if (cmd === "list") {
    const ns = await listNotes();
    console.log(ns);
  } else if (cmd === "update") {
    const id = args[0];
    const text = args[1];
    const ns = await updateNote(id, text);
    console.log(ns);
  } else if (cmd === "delete") {
    const id = args[0];
    await deleteNote(id);
  } else {
    console.log("Usage: node src/index.js <add|list|update|delete> [next]");
  }
};
