import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);

  function handleAdd(newInput) {
    setNotes((prevNote) => {
      return [...prevNote, newInput];
    });
    console.log(notes);
  }

  function handleDelete(id) {
    setNotes(notes.filter((note, index) => index !== id));
  }

  return (
    <div className="App">
      <Header />
      <CreateArea addNote={handleAdd} />
      <Note notes={notes} deleNote={handleDelete} />
      <Footer />
    </div>
  );
}

export default App;
