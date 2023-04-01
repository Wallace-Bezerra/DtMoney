import { useContext } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsContext } from "../../context/TransactionsContext";
import { SearchFormTransactions } from "./components/SearchFormTransactions";
import {
  PriceHighLight,
  TableContainer,
  TransactionsContainer,
} from "./styles";

export const Transactions = () => {
  const { transactions, error } = useContext(TransactionsContext);
  console.log(transactions[0]);
  console.log(transactions);

  return (
    <TransactionsContainer>
      <Header />
      <Summary />
      <main className="main">
        <SearchFormTransactions />
        <TableContainer className="grid">
          {error && <span>Não foi encontrado!</span>}

          {transactions.map((transaction) => {
            return (
              <li key={transaction.id} className="item">
                <h2>{transaction.description}</h2>
                <PriceHighLight status={transaction.type}>
                  {transaction.type === "outcome" ? "- " : "  "}
                  {transaction.price.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
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
