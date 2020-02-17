export const addNote = note => {
  note.id = notes.length + 1;
  setNotes([...notes, note]);
};
