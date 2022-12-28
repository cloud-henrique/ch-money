import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./styles/global";
import { theme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <h1>Hello, friend.</h1>
    </ThemeProvider>
  );
}
