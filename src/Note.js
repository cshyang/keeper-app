import React from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

function Note(props) {
  return (
    <div>
      {props.notes.map((note, index) => {
        return (
          <div className="note" key={index}>
            <h1>{note.title}</h1>
            <p>{note.content}</p>
            <button onClick={() => props.deleNote(index)}>
              <DeleteForeverIcon />
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Note;
