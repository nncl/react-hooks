import React, { useState, useEffect } from 'react';

function App() {
  const [tech, setTech] = useState([]);
  const [newTech, setNewTech] = useState('');

  function handleAdd() {
    setTech([...tech, newTech]);
    setNewTech('');
  }

  // Once - Component did amount
  useEffect(() => {
    const storagedTech = localStorage.getItem('tech');
    if (storagedTech) {
      setTech(JSON.parse(storagedTech));
    }

    // Component will unmount
    return () => {
      // document.removeEventListener();
    };
  }, []);

  // Every update - Component did aupdate
  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech));
  }, [tech]);

  return (
    <>
      <ul>
        {tech.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <input
        type="text"
        value={newTech}
        onChange={e => setNewTech(e.target.value)}
      />

      <button type="button" onClick={handleAdd}>
        Add
      </button>
    </>
  );
}

export default App;
