const { addNote } = require("../src/addNote.js");
const { updateNote, FILE } = require("../src/updateNote.js");
const { listNotes } = require("../src/listNotes.js");

const fs = require("node:fs/promises");

beforeEach(async () => {
  await fs.writeFile(FILE, "[]");
});

test("updates the text of an existing note", async () => {
  const a = await addNote("First");
  await addNote("Second");

  const result = await updateNote(a.id, "  Updated First  ");
  expect(result).toBeTruthy();
  expect(result.id).toBe(a.id);
  expect(result.text).toBe("Updated First");

  const notes = await listNotes();
  const found = notes.find((n) => n.id === a.id);
  expect(found.text).toBe("Updated First");
  expect(found.updatedAt).toBeTruthy();
});

test("returns false when updating a non-existent note", async () => {
  const result = await updateNote("missing", "new text");
  expect(result).toBe(false);
});

test("throws when update text is empty", async () => {
  const a = await addNote("keep");
  await expect(updateNote(a.id, "   ")).rejects.toThrow(/required/i);
});
