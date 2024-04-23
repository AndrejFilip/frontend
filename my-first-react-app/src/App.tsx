import React, { useState } from 'react';
import './App.css';
import IncreaseButton from './increaseButton'
import TextBox  from './TextBox';
import DecreaseButton from './decreaseButton'




function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <IncreaseButton onClick={() => setCount(count + 1)}>
        Increase Number
      </IncreaseButton>
      <DecreaseButton onClick={() => setCount(count-1)}>
        Decrease Number
      </DecreaseButton>
      <TextBox>Current Value is: {count}</TextBox>
    </div>
  );
}

export default App;
