import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const onButtonClick = (event) => {
    setCount(current => current + 1);
  };

  return (
    <div className="App">
      <h2>Current Count: {count}</h2>
      <button onClick={onButtonClick}>Increment Counter</button>
    </div>
  );
}

export default App;
