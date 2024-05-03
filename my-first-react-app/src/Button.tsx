import { styled } from 'styled-components';

const StyledButton = styled.button<{ primary: boolean }>`
  font-size: large;
  font-family: 'Times New Roman', Times, serif;
  height: 50px;
  width: 100px;
  border: 2px solid;
  font-weight: bold;
  color: white;
  background-color: ${(props) => (props.primary ? 'green' : 'red')};
  border-color: ${(props) => (props.primary ? 'green' : 'red')};
`;

export const Button = ({
  children,
  onClick,
  primary = true,
  ...rest
}: {
  children: string;
  primary?: boolean;
  onClick(): void;
}) => {
  return (
    <StyledButton {...{ onClick, primary }} {...rest}>
      {children}
    </StyledButton>
  );
};
