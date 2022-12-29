import { createContext, ReactNode, useEffect, useState } from "react";

import { api } from "../lib/axios";
import { TransactionProps } from "../pages/Transactions";

interface TransactionsContextProps {
  transactions: TransactionProps[];
  fetchTransactions: (query?: string) => Promise<void>;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext(
  {} as TransactionsContextProps
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  async function fetchTransactions(query?: string) {
    const response = await api.get("/transactions", { params: { q: query } });

    setTransactions(response.data);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions, fetchTransactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}
