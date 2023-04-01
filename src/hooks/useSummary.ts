import { useContext, useMemo } from "react";
import { TransactionsContext } from "../context/TransactionsContext";

export const useSummary = () => {
  const { transactions } = useContext(TransactionsContext);

  const summary = useMemo(() => {
    return transactions.reduce(
      (acc, current) => {
        if (current.type === "income") {
          acc.income += current.price;
          acc.total = acc.income - acc.outcome;
        } else {
          acc.outcome += current.price;
          acc.total = acc.income - acc.outcome;
        }
        return acc;
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
      }
      // const outcomeTotal = transactions.reduce((acc, transaction) => {
      //   if (transaction.type === "outcome") {
      //     return acc + transaction.price;
      //   } else {
      //     return acc;
      //   }
      // }, 0);
      // .filter((transation) => {
      //   return transation.type === "outcome";
      // })
      // .reduce((acc, current) => {
      //   return acc + current.price;
      // }, 0);

      // const incomeTotal = transactions
      //   .filter((transation) => {
      //     return transation.type === "income";
      //   })
      //   .reduce((acc, current) => {
      //     return acc + current.price;
      //   }, 0);
    );
  }, [transactions]);
  return summary;
};
