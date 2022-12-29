import { createContext, ReactNode, useEffect, useState } from 'react'

import { api } from '../lib/axios'

export interface TransactionProps {
  id: number
  createdAt: string
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}

interface CreateTransactionProps {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}

interface TransactionsContextProps {
  transactions: TransactionProps[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransactionProps) => Promise<void>
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextProps)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionProps[]>([])

  async function fetchTransactions(query?: string) {
    const response = await api.get('/transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })

    setTransactions(response.data)
  }

  async function createTransaction(data: CreateTransactionProps) {
    const { description, price, category, type } = data

    const response = await api.post('/transactions', {
      description,
      price,
      category,
      type,
      createdAt: new Date(),
    })

    setTransactions((state) => [response.data, ...state])
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
