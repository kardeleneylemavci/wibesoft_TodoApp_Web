import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = { text, completed: false };
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: '20px 0', color: '#333' }}>TODO LIST APP</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
