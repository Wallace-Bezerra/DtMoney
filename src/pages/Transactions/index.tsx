import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import {
  PriceHighLight,
  SearchForm,
  TableContainer,
  TransactionsContainer,
} from "./styles";

interface TransactionsProps {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: string;
  category: string;
  createdAt: string;
}
export const Transactions = () => {
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

  const [transactions, setTrasactions] = useState<TransactionsProps[]>([]);
  return (
    <TransactionsContainer>
      <Header />
      <Summary />
      <main className="main">
        <SearchForm>
          <input type="text" placeholder="Busque uma transação" />
          <button>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.0625 3.4375C5.9559 3.4375 3.4375 5.9559 3.4375 9.0625C3.4375 12.1691 5.9559 14.6875 9.0625 14.6875C12.1691 14.6875 14.6875 12.1691 14.6875 9.0625C14.6875 5.9559 12.1691 3.4375 9.0625 3.4375ZM1.5625 9.0625C1.5625 4.92036 4.92036 1.5625 9.0625 1.5625C13.2046 1.5625 16.5625 4.92036 16.5625 9.0625C16.5625 13.2046 13.2046 16.5625 9.0625 16.5625C4.92036 16.5625 1.5625 13.2046 1.5625 9.0625Z"
                fill="#00B37E"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.0402 13.0402C13.4063 12.6741 13.9999 12.6741 14.366 13.0402L18.1629 16.8371C18.529 17.2032 18.529 17.7968 18.1629 18.1629C17.7968 18.529 17.2032 18.529 16.8371 18.1629L13.0402 14.366C12.6741 13.9999 12.6741 13.4063 13.0402 13.0402Z"
                fill="#00B37E"
              />
            </svg>
            Buscar
          </button>
        </SearchForm>
        <TableContainer className="grid">
          {transactions.map((transaction) => {
            return (
              <li key={transaction.id} className="item">
                <h2>{transaction.description}</h2>
                <PriceHighLight status={transaction.type}>
                  {transaction.type === "outcome" && "- "}
                  {transaction.price}
                </PriceHighLight>
                <span>{transaction.category}</span>
                <span>
                  {new Date(transaction.createdAt).toLocaleDateString()}
                </span>
              </li>
            );
          })}
          {/* <li className="item">
            <h2>Desenvolvimento de site</h2>
            <PriceHighLight status="red">R$ 12.000,00</PriceHighLight>
            <span>Venda</span>
            <span>13/04/2022</span>
          </li> */}
        </TableContainer>
      </main>
    </TransactionsContainer>
  );
};
