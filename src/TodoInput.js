
import React, { useState } from 'react';
// todo input component 
function TodoInput({ onAdd }) {
  const [todoText, setTodoText] = useState('');

  const handleInputChange = (e) => {
    setTodoText(e.target.value);
  };

  const handleAddTodo = () => {
    if (todoText.trim() !== '') {
      onAdd(todoText);
      setTodoText('');
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Add a new TODO"
        value={todoText}
        onChange={handleInputChange}
        onClick={(e) => {
          if (e.key === 'Enter') {
            handleAddTodo();
          }
        }}
      />
      <button className='add-button' onClick={handleAddTodo}>Add-Task</button>
    </div>
  );
}

export default TodoInput;
