const { addNote } = require("../src/addNote.js");
const { updateNote, FILE } = require("../src/updateNote.js");
const { listNotes } = require("../src/listNotes.js");

const fs = require("node:fs/promises");

beforeEach(async () => {
  await fs.writeFile(FILE, "[]");
});

test("update a note", async () => {
  await addNote("A");
  await addNote("B");

  let notes = await listNotes();
  const updateId = notes[0].id;
  await updateNote(updateId, "Hello, there");
  notes = await listNotes();

  expect(notes[0].text).toBe("Hello, there");
});

test("rejects empty text", async () => {
  await addNote("A");
  await addNote("B");

  let notes = await listNotes();
  const updateId = notes[1].id;
  await expect(updateNote(updateId, " ")).rejects.toThrow(/required/);
});
