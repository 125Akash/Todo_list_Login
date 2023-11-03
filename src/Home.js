import React, { useState, useEffect } from 'react';
import './App.css';
import TodoList from './TodoList';
import TodoInput from './TodoInput';
import CompletedTodos from './CompletedTodos'; 
// Import react-toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Components/Navbar';

const Home =() => {
    const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]); // New state for completed TODOs

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    const storedCompletedTodos = JSON.parse(localStorage.getItem('completedTodos')) || [];
    setTodos(storedTodos);
    setCompletedTodos(storedCompletedTodos);
  }, []);
    // Local Storage 
  const saveTodosToLocalStorage = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const saveCompletedTodosToLocalStorage = (completedTodos) => {
    localStorage.setItem('completedTodos', JSON.stringify(completedTodos));
  };
   //toggle or to mark cross line
  const handleToggle = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
    saveTodosToLocalStorage(updatedTodos);
  };
 // Delete TODO
  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    saveTodosToLocalStorage(updatedTodos);
    toast.success('Todo Deleted Successfully!', {
      position: 'top-right',
      autoClose: 2000,
    });
  };
 // Mark as Completed
  const handleComplete = (id) => {
    const completedTodo = todos.find((todo) => todo.id === id);
    if (completedTodo) {
      const updatedCompletedTodos = [...completedTodos, completedTodo];
      setCompletedTodos(updatedCompletedTodos);
      saveCompletedTodosToLocalStorage(updatedCompletedTodos);

      const updatedTodos = todos.filter((todo) => todo.id !== id);
      setTodos(updatedTodos);
      saveTodosToLocalStorage(updatedTodos);
       toast.success('Todo Marked As Completed!', {
      position: 'top-right',
      autoClose: 2000,
    });
    }
  };
  // Move to Active
   const handleMoveToActive = (id) => {
    const completedTodo = completedTodos.find((todo) => todo.id === id);
    if (completedTodo) {
      const updatedActiveTodos = [...todos, completedTodo];
      setTodos(updatedActiveTodos);
      saveTodosToLocalStorage(updatedActiveTodos);

      const updatedCompletedTodos = completedTodos.filter((todo) => todo.id !== id);
      setCompletedTodos(updatedCompletedTodos);
      saveCompletedTodosToLocalStorage(updatedCompletedTodos);
      toast.success('Todo Back To Active!', {
      position: 'top-right',
      autoClose: 2000,
    });
    }
  };

  // Add TODO
  const handleAdd = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    saveTodosToLocalStorage(updatedTodos);
    toast.success('Todo Added Successfully!', {
      position: 'top-right',
      autoClose: 2000, // Close the toast after 2 seconds
    });
  };
// Edit TODO
  const handleEdit = (id, editedText) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: editedText };
      }
      return todo;
    });
    setTodos(updatedTodos);
    saveTodosToLocalStorage(updatedTodos);
    toast.success('Todo Edit Successfully!', {
      position: 'top-right',
      autoClose: 2000,
    });
  };
// Reset Alll
  const handleReset = () => {
    setTodos([]);
    setCompletedTodos([]); // Reset completed todos
    localStorage.removeItem('todos');
    localStorage.removeItem('completedTodos'); // Remove completed todos from localStorage
    toast.success('Reset is Completed!', {
      position: 'top-right',
      autoClose: 2000,
    });
  };

  return (<>
    <Navbar/>
    <div className="App">
      <h1>TODO App</h1>
       <ToastContainer />
      <div className="button-section">
        <TodoInput onAdd={handleAdd} />
      
          <img
            src="./reset.png"
            width="30px"
            height="30px"
            alt="Reset"
            onClick={handleReset}
            className='reset-button'
          />
        
      </div>
      <div className="todo-section">
        <h2>Active TODOs</h2>
        <TodoList
          todos={todos}
          onToggle={handleToggle}
          onDelete={handleDelete}
          onEdit={handleEdit}
          onComplete={handleComplete}
        />
      </div>
      <div className="todo-section">
        <CompletedTodos
          completedTodos={completedTodos}
          onMoveToActive={handleMoveToActive} 
        />
      </div>
    </div>
    </>
  );
}



export default Home