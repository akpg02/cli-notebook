const { addNote } = require("../src/addNote");
const { listNotes, FILE } = require("../src/listNotes");
const fs = require("node:fs/promises");

beforeEach(async () => {
  await fs.writeFile(FILE, "[]");
});

test("lists saved notes", async () => {
  await addNote("A");
  await addNote("B");
  const notes = await listNotes();
  expect(notes.map((n) => n.text)).toEqual(["A", "B"]);
});
