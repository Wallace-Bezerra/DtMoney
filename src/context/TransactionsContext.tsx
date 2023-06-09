import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { Api } from "../lib/axios";

interface TransationsContextType {
  transactions: Transaction[];
  setTransactions: Dispatch<SetStateAction<Transaction[]>>;
  error: boolean;
  setError: Dispatch<SetStateAction<boolean>>;
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
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await Api.get("/transactions", {
        params: {
          _sort: "createdAt",
          _order: "desc",
        },
      });
      setTransactions(response.data);
    };
    fetchData();
    // fetch("http://localhost:3000/transactions")
    //   .then((res) => res.json())
    //   .then((json) => {
    //     console.log(json);
    //     setTrasactions(json);
    //   });
  }, []);

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        setTransactions,
        error,
        setError,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};
