import "./App.css";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";
import { data } from "./data.js";
import Split from "react-split";
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";

export default function App() {
  const [notes, setNotes] = useState(
    () => JSON.parse(localStorage.getItem("localNotes")) || []
  );
  const [currentNoteId, setCurrentNoteId] = useState(
    (notes[0] && notes[0].id) || ""
  );

  useEffect(() => {
    localStorage.setItem("localNotes", JSON.stringify(notes));
  }, [notes]);

  function createNewNote() {
    const newNote = {
      id: nanoid(),
      body: "# Type your markdown note's title here",
    };
    setNotes((prevNotes) => [newNote, ...prevNotes]);
    setCurrentNoteId(newNote.id);
  }

  function updateNote(text) {
    setNotes((oldNotes) => {
      const newNotes = oldNotes.map((oldNote) =>
        oldNote.id === currentNoteId ? { ...oldNote, body: text } : oldNote
      );
      const editedNote = newNotes.find((note) => note.id === currentNoteId);
      const remainingNotes = newNotes.filter(
        (note) => note.id !== currentNoteId
      );
      return [editedNote, ...remainingNotes];
    });
  }

  function deleteNote(event, noteId) {
    event.stopPropagation();
    setNotes((oldNotes) => oldNotes.filter((note) => note.id !== noteId));
  }

  function findCurrentNote() {
    return (
      notes.find((note) => {
        return note.id === currentNoteId;
      }) || notes[0]
    );
  }

  return (
    <main>
      {notes.length > 0 ? (
        <Split sizes={[30, 70]} direction="horizontal" className="split">
          <Sidebar
            notes={notes}
            currentNote={findCurrentNote()}
            setCurrentNoteId={setCurrentNoteId}
            newNote={createNewNote}
            deleteNote={deleteNote}
          />
          {currentNoteId && notes.length > 0 && (
            <Editor currentNote={findCurrentNote()} updateNote={updateNote} />
          )}
        </Split>
      ) : (
        <div className="no-notes">
          <h1>You have no notes</h1>
          <button className="first-note" onClick={createNewNote}>
            Create one now
          </button>
        </div>
      )}
    </main>
  );
}
