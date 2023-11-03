import React from 'react';
import TodoItem from './TodoItem';
// function todo item showm in list
function TodoList({ todos, onToggle, onDelete, onEdit, onComplete, onMoveToActive }) {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={() => onToggle(todo.id)}
          onDelete={() => onDelete(todo.id)}
          onEdit={onEdit}
          onComplete={() => onComplete(todo.id)}
          onMoveToActive={() => onMoveToActive(todo.id)} // Pass the function for Move to Active
        />
      ))}
    </div>
  );
}

export default TodoList;
