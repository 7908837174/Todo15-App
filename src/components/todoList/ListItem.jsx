import React from "react";

const ListItem = ({ item, toggleItem, removeItem }) => {
  const onToggle = () => {
    toggleItem(item.id);
  };

  const onDelete = () => {
    removeItem(item.id);
  };

  return (
    <li className={item.completed ? "done" : ""}>
      <span class="label">{item.text}</span>

      <div class="actions">
        <button
          class="btn-picto"
          type="button"
          title={item.completed ? "Undone" : "Done"}
          onClick={onToggle}
        >
          <i class="material-icons">
            {item.completed ? "check_box" : "check_box_outline_blank"}
          </i>
        </button>

        <button
          class="btn-picto"
          type="button"
          title="Delete"
          onClick={onDelete}
        >
          <i class="material-icons">delete</i>
        </button>
      </div>
    </li>
  );
};

ListItem.defaultProps = {
  item: {
    id: 0,
    text: "",
    completed: false,
  },
  toggleItem: () => {},
  removeItem: () => {},
};

export default ListItem;
