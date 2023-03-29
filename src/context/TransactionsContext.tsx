import { createContext, ReactNode, useEffect, useState } from "react";

interface TransationsContextType {
  transactions: Transaction[];
}
export const TransactionsContext = createContext({} as TransationsContextType);

interface TransacionsProviderProps {
  children: ReactNode;
}

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}

export const TransacionsProvider = ({ children }: TransacionsProviderProps) => {
  const [transactions, setTrasactions] = useState<Transaction[]>([]);

  const fetchData = async () => {
    const response = await fetch("http://localhost:3000/transactions");
    const data = await response.json();
    setTrasactions(data);
  };
  useEffect(() => {
    fetchData();
    // fetch("http://localhost:3000/transactions")
    //   .then((res) => res.json())
    //   .then((json) => {
    //     console.log(json);
    //     setTrasactions(json);
    //   });
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions: transactions }}>
      {children}
    </TransactionsContext.Provider>
  );
};
