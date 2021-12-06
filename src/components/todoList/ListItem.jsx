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
      <span className="label">{item.text}</span>

      <div className="actions">
        <button
          className="btn-picto"
          type="button"
          title={item.completed ? "Undone" : "Done"}
          onClick={onToggle}
        >
          <i className="material-icons">
            {item.completed ? "check_box" : "check_box_outline_blank"}
          </i>
        </button>

        <button
          className="btn-picto"
          type="button"
          title="Delete"
          onClick={onDelete}
        >
          <i className="material-icons">delete</i>
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
