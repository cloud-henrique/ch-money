import { ReactNode, useCallback, useEffect, useState } from 'react'

import { createContext } from 'use-context-selector'

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
  deleteTransaction: (id: string) => Promise<void>
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextProps)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionProps[]>([])

  const fetchTransactions = useCallback(async (query?: string) => {
    const response = await api.get('/transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })

    setTransactions(response.data)
  }, [])

  const createTransaction = useCallback(async (data: CreateTransactionProps) => {
    const { description, price, category, type } = data

    const response = await api.post('/transactions', {
      description,
      price,
      category,
      type,
      createdAt: new Date(),
    })

    setTransactions(state => [response.data, ...state])
  }, [])

  const deleteTransaction = useCallback(
    async (id: string) => {
      await api.delete(`/transactions/${id}`)
      fetchTransactions()
    },
    [fetchTransactions]
  )

  useEffect(() => {
    fetchTransactions()
  }, [fetchTransactions])

  return (
    <TransactionsContext.Provider value={{ transactions, fetchTransactions, createTransaction, deleteTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}
