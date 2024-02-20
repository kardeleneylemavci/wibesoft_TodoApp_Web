import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState('');
  
  
  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText('');
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', borderRadius: '10px', backgroundColor: '#f8f8f8' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>
        <input 
          type="text" 
          value={text} 
          onChange={handleChange} 
          placeholder="Yeni görev ekle..." 
          style={{ flex: '1', padding: '10px', borderRadius: '5px', border: 'none', marginRight: '10px', fontSize: '16px' }} 
        />
        <button type="submit" style={{ backgroundColor: '#333', color: '#fff', padding: '10px 20px', borderRadius: '5px', border: 'none', fontSize: '16px', cursor: 'pointer' }}>Ekle</button>
      </form>
    </div>
  );
};

export default AddTodo;
