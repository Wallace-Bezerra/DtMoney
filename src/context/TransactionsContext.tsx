import { createContext, ReactNode } from "react";

const transactionContext = createContext({});

interface TransacionsProviderProps {
  children: ReactNode;
}
export const TransacionsProvider = ({ children }: TransacionsProviderProps) => {
  return (
    <transactionContext.Provider value={"12"}>
      {children}
    </transactionContext.Provider>
  );
};
