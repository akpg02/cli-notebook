const { addNote } = require("../src/addNote.js");
const { deleteNote, FILE } = require("../src/deleteNote.js");
const { listNotes } = require("../src/listNotes.js");

const fs = require("node:fs/promises");

beforeEach(async () => {
  await fs.writeFile(FILE, "[]");
});

beforeEach(async () => {
  await fs.writeFile(FILE, "[]");
});

test("delete saved note", async () => {
  await addNote("A");
  await addNote("B");

  let notes = await listNotes();
  const keepId = notes[0].id;
  await deleteNote(notes[1].id);

  notes = await listNotes();
  expect(notes).toHaveLength(1);
  expect(notes[0].id).toBe(keepId);
});
