const { addNote, FILE } = require("../src/addNote");
const fs = require("node:fs/promises");

beforeEach(async () => {
  await fs.writeFile(FILE, "[]");
});

test("adds a valid note", async () => {
  const n = await addNote("First note");
  const raw = await fs.readFile(FILE, "utf-8");
  const data = JSON.parse(raw);
  expect(n.text).toBe("First note");
  expect(data).toHaveLength(1);
});

test("reject empty text", async () => {
  await expect(addNote("")).rejects.toThrow(/required/);
});
