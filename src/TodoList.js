import React, { useState } from 'react';

const TodoList = ({ todos, setTodos }) => {
  const [selectedTodos, setSelectedTodos] = useState([]);
  const [progressValues, setProgressValues] = useState(Array(todos.length).fill(0)); // İlerleme durumu için başlangıç değeri olarak her görev için 0.
  const [darkMode, setDarkMode] = useState(false);

  const handleDelete = (index) => {
    const newTodos = todos.filter((todo, todoIndex) => todoIndex !== index);
    setTodos(newTodos);
    setSelectedTodos(selectedTodos.filter((todoIndex) => todoIndex !== index));
    setProgressValues(progressValues.filter((value, valueIndex) => valueIndex !== index)); // Görev silindiğinde ilerleme durumu da güncellenmeli.
  };

  const toggleTodoSelection = (index) => {
    if (selectedTodos.includes(index)) {
      setSelectedTodos(selectedTodos.filter((todoIndex) => todoIndex !== index));
    } else {
      setSelectedTodos([...selectedTodos, index]);
    }
  };

  const handleProgressChange = (event, index) => {
    const newProgressValues = [...progressValues];
    newProgressValues[index] = event.target.value; // Kullanıcının girdiği ilerleme değerini ilgili görevin ilerleme durumu değeri olarak ayarla.
    setProgressValues(newProgressValues);
  };

  const handleSliderChange = (event, index) => {
    const newProgressValues = [...progressValues];
    newProgressValues[index] = parseInt(event.target.value); // Range inputunun değerini ilgili görevin ilerleme durumu değeri olarak ayarla.
    setProgressValues(newProgressValues);
  };

  const completedTodos = todos.filter((todo, index) => progressValues[index] === 100);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div style={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: darkMode ? '#333' : '#f8f8f8', color: darkMode ? '#fff' : '#333' }}>
      <h2 style={{ marginBottom: '20px', textAlign: 'center', color: darkMode ? '#fff' : '#333' }}>Yapılacaklar Listesi</h2>
      <div style={{ width: '90%', maxWidth: '600px', borderRadius: '10px', backgroundColor: darkMode ? '#555' : '#fff', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '20px', marginBottom: '20px' }}>
        {todos.map((todo, index) => (
          <div key={index} onClick={() => toggleTodoSelection(index)} style={{ marginBottom: '20px', padding: '10px', backgroundColor: darkMode ? '#666' : selectedTodos.includes(index) ? '#f0f0f0' : '#f8f8f8', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', cursor: 'pointer' }}>
            <span style={{ flex: 1, fontSize: '16px', color: darkMode ? '#fff' : '#333' }}>{todo.text}</span>
            <div style={{ flex: 1, marginLeft: '10px', display: 'flex', alignItems: 'center' }}>
              <input 
                type="range" 
                value={progressValues[index]} 
                onChange={(event) => handleSliderChange(event, index)} 
                min="0" 
                max="100" 
                style={{ width: '100%', marginRight: '10px', backgroundColor: 'transparent', cursor: 'pointer' }} 
              />
              <span>{progressValues[index]}%</span>
            </div>
            <button onClick={(e) => {e.stopPropagation(); handleDelete(index);}} style={{ backgroundColor: 'transparent', border: 'none', color: darkMode ? '#ccc' : '#888', fontSize: '14px', cursor: 'pointer', marginLeft: '10px' }}>Sil</button>
          </div>
        ))}
        {completedTodos.length > 0 && (
          <div style={{ marginTop: '20px', backgroundColor: darkMode ? '#666' : '#d7ffd9', padding: '10px', borderRadius: '10px' }}>
            <h3 style={{ marginBottom: '10px', textAlign: 'center', color: darkMode ? '#fff' : 'green' }}>Tamamlananlar</h3>
            {completedTodos.map((todo, index) => (
              <div key={index} style={{ padding: '5px', backgroundColor: darkMode ? '#777' : 'green', color: darkMode ? '#fff' : 'white', borderRadius: '5px', marginBottom: '5px' }}>{todo.text}</div>
            ))}
          </div>
        )}
      </div>
      <button onClick={toggleDarkMode} style={{ backgroundColor: darkMode ? '#ccc' : '#333', color: darkMode ? '#333' : '#ccc', padding: '10px 20px', border: 'none', borderRadius: '5px', fontSize: '16px', cursor: 'pointer' }}>{darkMode ? 'Aydınlık Mod' : 'Karanlık Mod'}</button>
    </div>
  );
};

export default TodoList;
