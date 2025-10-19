const fs = require("node:fs/promises");
const path = require("node:path");

const FILE = path.join(__dirname, "..", "notes.json");

async function updateNote(id, text) {
  if (!id) throw new Error("id is required");
  if (typeof text !== "string" || !text.trim()) {
    throw new Error("Note text is required");
  }
  const newText = text.trim();

  let data = [];
  try {
    const raw = await fs.readFile(FILE, "utf-8").catch(() => "[]");
    const parsed = JSON.parse(raw);
    data = Array.isArray(parsed) ? parsed : [];
  } catch {
    data = [];
  }

  const toKey = (x) => String(x);
  const idx = data.findIndex((n) => toKey(n.id) === toKey(id));
  if (idx === -1) return false;

  const updated = {
    ...data[idx],
    text: newText,
    updatedAt: new Date().toISOString(),
  };

  const next = data.slice();
  next[idx] = updated;

  await fs.writeFile(FILE, JSON.stringify(next, null, 2));
  return updated;
}

module.exports = { updateNote, FILE };
