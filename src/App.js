import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

const App = () => {
  // State tanımlamaları
  const [todos, setTodos] = useState([]);

  // Yeni bir todo eklemek için kullanılan fonksiyon
  const addTodo = (text) => {
    const newTodo = { text, completed: false };
    setTodos([...todos, newTodo]);
  };

  // Uygulamanın görünümü
  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: '20px 0', color: '#333' }}>TODO LIST APP</h1>
      {/* Yeni todo eklemek için AddTodo bileşeni */}
      <AddTodo addTodo={addTodo} />
      {/* Todo listesini göstermek için TodoList bileşeni */}
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
