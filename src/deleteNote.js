const fs = require("node:fs/promises");
const path = require("node:path");

const FILE = path.join(__dirname, "..", "notes.json");

async function deleteNote (id) {
  if (!id) throw new Error('id is required')
  
  let data =[];
  try {
    const raw = await fs.readFile(FILE, "utf-8").catch(() => "[]");
    data = JSON.parse(raw);
  } catch {
    data = [];
  }

  const toKey = (x) => String(x);
  const next = data.filter((n) => toKey(n.id) !== toKey(id));

  if (next.length === data.length) return false;

  await fs.writeFile(FILE, JSON.stringify(next, null, 2) + "\n");
  return true;
}

module.exports = { deleteNote, FILE };
