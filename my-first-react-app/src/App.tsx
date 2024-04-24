import React, { useEffect, useState } from 'react';
import './App.css';
import IncreaseButton from './increaseButton'
import TextBox  from './TextBox';
import DecreaseButton from './decreaseButton'
import StyledContainer from './container';




function App() {
  const localCount = localStorage.getItem("variable")
  const [count, setCount] = useState(localCount ?? 0)
    useEffect(() => {
    localStorage.setItem("variable", String(count))
  }, [count])


  return (
    <StyledContainer>
      <IncreaseButton onClick={() => setCount(+count+1)}>
        {"Increase"}
      </IncreaseButton>
      <DecreaseButton onClick={() => setCount(+count-1)}>
        Decrease 
      </DecreaseButton>
      <TextBox>Current Value is: {count}</TextBox>
      </StyledContainer>
  );
}

export default App;
