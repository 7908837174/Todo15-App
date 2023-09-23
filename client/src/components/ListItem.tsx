import { Todo } from "../services/todo.service";

const ListItem = ({
  item,
  toggleItem,
  removeItem,
}: {
  item: Todo;
  toggleItem: (x: number) => void;
  removeItem: (x: number) => void;
}) => {
  const onToggle = () => {
    toggleItem(item.id);
  };

  const onDelete = () => {
    removeItem(item.id);
  };

  return (
    <li className={item.completed ? "done" : ""}>
      <div className="label-container">
        <div className="actions actions-right">
          <button
            className="btn"
            type="button"
            title={item.completed ? "Undone" : "Done"}
            onClick={onToggle}
          >
            <i className="material-icons">
              {item.completed ? "check_box" : "check_box_outline_blank"}
            </i>
          </button>
        </div>

        <span className="label">{item.text}</span>
      </div>

      <div className="actions actions-left">
        <button className="btn" type="button" title="Delete" onClick={onDelete}>
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
