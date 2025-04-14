import { useState } from "react";
import "./TodoItem.css";

function TodoItem({ todo,index, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(todo.title);

  const handleUpdate = () => {
    onUpdate(todo._id, updatedTitle);
    setIsEditing(false);
  };
  return (
    <li className="todo-item">
      {isEditing ? (
        <>
          <div>
          <strong>{index + 1}. </strong>
          <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
          </div>
          <div>
          <button onClick={handleUpdate}>💾</button>
          <button onClick={() => setIsEditing(false)}>✕</button>
          </div>
        </>
      ) : (
        <>
          <div>
          <strong>{index + 1}. </strong>
          {todo.title}
          </div>
          <div>
          <button onClick={() => setIsEditing(true)}>✏️</button>
          <button onClick={() => onDelete(todo._id)}>🗑️</button>
          </div>
        </>
      )}
    </li>
  );
}

export default TodoItem;
