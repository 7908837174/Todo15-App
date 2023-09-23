import { FormEvent, FormEventHandler, useState } from "react";

import "./AddItem.css";

const AddItem = ({
  handleSubmit,
}: {
  handleSubmit: (text: string) => void;
}) => {
  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e?.target?.value);
  };

  const handleSubmitForm: FormEventHandler<HTMLFormElement> = (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    handleSubmit(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmitForm}>
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
