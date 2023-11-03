import React from 'react';
import './CompletedTodos.css'; //css for completed todos
//function CompletedTodos it has to seperate because of to display completed todos
function CompletedTodos({ completedTodos, onMoveToActive }) {
  return (
    <div className="completed-todos">
      <h2>Completed TODOs</h2>
      <ul className="completed-todo-list"> 
        {completedTodos.map((todo) => (
          <li key={todo.id}>
            {` ${todo.text}`}{' '}<img src="./complete-48.png" width="20px" height="20px" alt="Delete"/>
            <img src="./undo.png" width="30px" height="30px" alt="Delete" className='move-to-active-button' onClick={() => onMoveToActive(todo.id)} style={{ cursor: 'pointer' }} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CompletedTodos;
