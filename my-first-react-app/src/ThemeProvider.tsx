import { ThemeProvider } from 'styled-components';

type Theme = {
  color: string;
  backgroundColor: string;
  borderColor: string;
};

type ThemeProps = {
  children: React.ReactNode;
  color: string;
};

const Primary: Theme = {
  color: 'white',
  backgroundColor: 'green',
  borderColor: 'black',
};

const Danger: Theme = {
  color: 'white',
  backgroundColor: 'red',
  borderColor: 'black',
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const Theme = ({ children, color }: ThemeProps) => {
  const theme = 'primary';

  return (
    <ThemeProvider theme={theme === color ? Primary : Danger}>
      {children}
    </ThemeProvider>
  );
};
