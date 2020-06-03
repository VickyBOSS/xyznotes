const fs = require("fs");

const addNote = text => {
  const notes = loadNotes();
  notes.push({ text });
  fs.writeFileSync("notes.json", JSON.stringify(notes));
};

const getNotes = () => {
  return loadNotes();
};

const loadNotes = () => {
  try {
    const notesBuffer = fs.readFileSync("notes.json");
    return JSON.parse(notesBuffer.toString());
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes,
  addNote,
};
