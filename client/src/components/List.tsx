import { useState, useEffect } from "react";

import "./List.css";
import AddItem from "./AddItem.tsx";
import ListItem from "./ListItem.tsx";
import todoService, { Todo } from "../services/todo.service.js";

const List = () => {
  const [items, setItems] = useState<Todo[]>([]);

  const getItems = async () => {
    const result = await todoService.getTodos();
    setItems(result);
  };

  const addItem = async (text: string) => {
    await todoService.addTodo(text);
    getItems();
  };

  const removeItem = async (id: number) => {
    await todoService.deleteTodo(id);
    getItems();
  };

  const toggleItem = async (id: number) => {
    const foundItem = items.find((item) => item.id === id);
    if (!foundItem) return;
    foundItem.completed = !foundItem?.completed;
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
        {items.map((item: Todo) => (
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
