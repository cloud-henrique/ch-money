import { FiTrash2 } from 'react-icons/fi'
import { useTheme } from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import { useContextSelector } from 'use-context-selector'

import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'

import { dateFormatter, priceFormatter } from '../../utils/formatter'
import { TransactionsContext } from '../../contexts/TransactionsContext'

import { PriceHighlight, TransactionsContainer, TransactionsTable } from './styles'

export function Transactions() {
  const theme = useTheme()
  const transactions = useContextSelector(TransactionsContext, context => context.transactions)
  const deleteTransaction = useContextSelector(TransactionsContext, context => context.deleteTransaction)

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Valor</th>
              <th>Categoria</th>
              <th>Data</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {transactions.map(transaction => (
              <tr key={transaction.id}>
                <td width="45%">{transaction.description}</td>
                <td>
                  <PriceHighlight variant={transaction.type}>
                    {transaction.type === 'outcome' && '- '}
                    {priceFormatter.format(transaction.price)}
                  </PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
                <td>
                  <Dialog.Root>
                    <Dialog.Trigger asChild>
                      <button
                        type="button"
                        title="Excluir transação"
                        onClick={() => deleteTransaction(String(transaction.id))}
                      >
                        <FiTrash2 color={theme['red-500']} size={24} />
                      </button>
                    </Dialog.Trigger>
                  </Dialog.Root>
                </td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
