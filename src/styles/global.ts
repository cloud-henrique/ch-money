import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme['green-500']};
  }

  body {
    background-color: ${props => props.theme['gray-800']};
    color: ${props => props.theme['gray-100']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem Roboto, sans-serif;
  }

  button {
    align-items: center;
    background: transparent;
    border-radius: 6px;
    border: 0;
    cursor: pointer;
    display: flex;
    justify-content: center;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.7;
    }
  }

  input {
    border-radius: 6px;
    border: 0;
  }
`
