import { styled } from 'styled-components';
import { Theme } from './ThemeProvider';

const StyledButton = styled.button`
  font-size: large;
  font-family: 'Times New Roman', Times, serif;
  height: 50px;
  width: 100px;
  border: 2px solid;
  font-weight: bold;
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.backgroundColor};
  border-color: ${(props) => props.theme.borderColor};
`;

export const Button = ({
  children,
  onClick,
  color,
  ...rest
}: {
  children: string;
  onClick(): void;
  color: string;
}) => {
  return (
    <Theme {...{ color }}>
      <StyledButton {...{ onClick, color }} {...rest}>
        {children}
      </StyledButton>
    </Theme>
  );
};
