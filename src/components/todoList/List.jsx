import React, { useState, useEffect } from "react";

import ListItem from "./ListItem";
import AddItem from "./AddItem";

const List = () => {
  const [items, setItems] = useState([]);

  const getItems = () => {
    // setItems([]);
  };

  // TODO: Add a useEffect to fetch the items from the server
  // Add functionality to add items to the server
  const addItem = (text) => {
    setItems((prevItems) => [
      ...prevItems,
      { id: prevItems.length + 1, text, completed: false },
    ]);
    getItems();
  };

  // TODO: Add delete item functionality
  const removeItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
    getItems();
  };

  // TODO: Add toggle item functionality
  const toggleItem = (id) => {
    setItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      });
    });
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
