import { createContext, ReactNode, useEffect, useState } from "react";

import { TransactionProps } from "../pages/Transactions";

interface TransactionsContextProps {
  transactions: TransactionProps[];
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionsContextProps);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  async function fetchTransactions() {
    const response = await fetch("http://localhost:3000/transactions");
    const data = await response.json();
    setTransactions(data);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}
