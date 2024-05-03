import { useEffect, useState } from 'react';
import './App.css';
import TextBox from './TextBox';
import StyledContainer from './container';
import { Button } from './Button';
import styled from 'styled-components';

const StyledPrimaryButton = styled(Button)`
  position: absolute;
  top: 25%;
  margin-left: 40%;
`;

const StyledDangerButton = styled(Button)`
  position: absolute;
  top: 25%;
  margin-left: 50%;
`;

function App() {
  const localCount = localStorage.getItem('variable');
  const [count, setCount] = useState(localCount ? Number(localCount) : 0);
  useEffect(() => {
    localStorage.setItem('variable', String(count));
  }, [count]);

  return (
    <StyledContainer>
      <StyledPrimaryButton color="primary" onClick={() => setCount(count + 1)}>
        {'Increase'}
      </StyledPrimaryButton>
      <StyledDangerButton color="danger" onClick={() => setCount(count - 1)}>
        Decrease
      </StyledDangerButton>

      <TextBox>Current Value is: {count}</TextBox>
    </StyledContainer>
  );
}

export default App;
