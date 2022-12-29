import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './styles/global'
import { theme } from './styles/themes/default'

import { Transactions } from './pages/Transactions'
import { TransactionsProvider } from './contexts/TransactionsContext'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
    </ThemeProvider>
  )
}
