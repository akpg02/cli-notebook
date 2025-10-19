const fs = require("node:fs/promises");
const path = require("node:path");

const FILE = path.join(__dirname, "..", "notes.json");

async function listNotes() {
  const raw = await fs.readFile(FILE, "utf-8").catch(() => "[]");
  return JSON.parse(raw);
}

module.exports = { listNotes, FILE };
