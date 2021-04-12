import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [newInput, setNewInput] = useState({ title: "", content: "" });
  const [isExpended, setIsExpended] = useState(false);

  function handleChange(event) {
    event.persist();
    const { name, value } = event.target;
    setNewInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  return (
    <div>
      <form className="create-note">
        {isExpended ? (
          <input
            name="title"
            placeholder="Title"
            onChange={handleChange}
            value={newInput.title}
          />
        ) : null}

        <textarea
          name="content"
          placeholder="Take a note..."
          rows={isExpended ? "3" : "1"}
          onChange={handleChange}
          onClick={() => setIsExpended(true)}
          value={newInput.content}
        />
        <Zoom in={isExpended}>
          <Fab
            onClick={(event) => {
              event.preventDefault();
              props.addNote(newInput);
              setNewInput({ title: "", content: "" });
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
