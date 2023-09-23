import { useState } from "react";

import "./AddItem.css";

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
    <form onSubmit={handleSubmitForm.bind(this)}>
      <label htmlFor="newItem">Add to the todo list</label>
      <input
        type="text"
        id="newItem"
        value={text}
        onChange={handleChange}
        required
      />
      <button type="submit">Add item</button>
    </form>
  );
};

export default AddItem;
