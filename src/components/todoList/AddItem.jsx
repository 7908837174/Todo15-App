import React, { useState } from "react";

const AddItem = ({ handleSubmit }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    handleSubmit(text);
    setText("");
  };

  return (
    <form name="newform">
      <label htmlFor="newitem">Add to the todo list</label>
      <input type="text" id="newitem" value={text} onChange={handleChange} />
      <button type="submit" onClick={handleSubmitForm.bind(this)}>
        Add item
      </button>
    </form>
  );
};

export default AddItem;
