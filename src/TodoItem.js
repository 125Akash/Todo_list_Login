import React, { useState } from "react";

function TodoItem({ todo, onToggle, onDelete, onEdit, onComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);
  //save edited text
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    if (editedText.trim() !== "") {
      onEdit(todo.id, editedText);
      setIsEditing(false);
    }
  };

  return (
    <div className={`todo-card ${todo.completed ? "completed" : ""}`}>
      {isEditing ? (
        <div className="todo-edit">
          <input
            type="text"
            className="todo-edit-input"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button className="todo-edit" onClick={handleSaveEdit}>
            Save
          </button>
        </div>
      ) : (
        <>
          <div className="todo-text" onClick={onToggle}>
            {todo.text}
          </div>
          {!todo.completed ? (
            <div className="todo-actions">
              <img
                src="./delete.png"
                width="30px"
                height="30px"
                alt="Delete"
                onClick={onDelete}
               className="deleteButton"
              />

              <img
                src="./edit.png"
                width="30px"
                height="30px"
                alt="Delete"
                onClick={handleEditClick}
                className="editButton"
              />
             
                <img
                  src="./complete-94.png"
                  width="30px"
                  height="30px"
                  alt="Delete"
                  onClick={() => onComplete(todo.id)}
                  className="compeleteButton"
                />
          
            </div>
          ) : null}
        </>
      )}
    </div>
  );
}

export default TodoItem;
