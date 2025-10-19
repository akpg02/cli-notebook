const fs = require("node:fs/promises");
const { randomUUID } = require("node:crypto");
const path = require("node:path");

const FILE = path.join(__dirname, "..", "notes.json");

async function addNote(text) {
  if (typeof text !== "string" || !text.trim()) {
    throw new Error("Note text is required");
  }
  const raw = await fs.readFile(FILE, "utf-8").catch(() => "[]");
  const data = JSON.parse(raw);
  const note = {
    id: randomUUID(),
    text: text.trim(),
    createdAt: new Date().toISOString(),
  };
  data.push(note);
  await fs.writeFile(FILE, JSON.stringify(data, null, 2));
  return note;
}

module.exports = { addNote, FILE };
