const { addNote } = require("../src/addNote.js");
const { deleteNote, FILE } = require("../src/deleteNote.js");
const { listNotes } = require("../src/listNotes.js");

const fs = require("node:fs/promises");

beforeEach(async () => {
  await fs.writeFile(FILE, "[]");
});

test("delete saved note by id", async () => {
  await addNote("A");
  await addNote("B");

  let notes = await listNotes();
  const keepId = notes[ 0 ].id;
  const deleteId = notes[ 1 ].id
  
  const ok = await deleteNote(deleteId);
  expect(ok).toBe(true)

  notes = await listNotes();
  expect(notes).toHaveLength(1);
  expect(notes[0].id).toBe(keepId);
});


test('returns false when deleting a non-existent note', async () => {
  const ok = await deleteNote('non-existent-id')
  expect(ok).toBe(false)
})