import { useState, useEffect } from "react";

import "./List.css";
import AddItem from "./AddItem.tsx";
import ListItem from "./ListItem.tsx";
import todoService from "../services/todo.service.js";

const List = () => {
  const [items, setItems] = useState([]);

  const getItems = async () => {
    const result = await todoService.getTodos();
    setItems(result);
  };

  const addItem = async (text) => {
    await todoService.addTodo(text);
    getItems();
  };

  const removeItem = async (id) => {
    await todoService.deleteTodo(id);
    getItems();
  };

  const toggleItem = async (id) => {
    const foundItem = items.find((item) => item.id === id);
    foundItem.completed = !foundItem.completed;
    await todoService.updateTodo(foundItem);

    getItems();
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <>
      <AddItem handleSubmit={addItem} />

      <ul>
        {items.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            toggleItem={toggleItem}
            removeItem={removeItem}
          />
        ))}
      </ul>
      {items.length === 0 && (
        <p className="emptylist">Your todo list is empty.</p>
      )}
    </>
  );
};

export default List;
