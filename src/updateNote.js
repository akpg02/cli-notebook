const fs = require("node:fs/promises");
const path = require("node:path");

const FILE = path.join(__dirname, "..", "notes.json");

async function updateNote(id, text) {
  if (typeof text !== "string" || !text.trim()) {
    throw new Error("Note text is required");
  }

  let data;

  try {
    const raw = await fs.readFile(FILE, "utf-8").catch(() => "[]");
    const parsed = JSON.parse(raw);
    data = Array.isArray(parsed) ? parsed : [];
  } catch {
    data = [];
  }

  const toKey = (x) => String(x);

  const updated = data.map((nts) =>
    toKey(nts.id) === toKey(id) ? { ...nts, text } : nts
  );

  await fs.writeFile(FILE, JSON.stringify(updated, null, 2));
}

module.exports = { updateNote, FILE };
