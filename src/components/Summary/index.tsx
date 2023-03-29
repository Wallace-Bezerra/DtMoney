import { useRef } from "react";
import { Container, SummaryContainer, SummaryCard } from "./styles";
import ArrowUp from "../../assets/ArrowUp.svg";
import ArrowDown from "../../assets/ArrowDown.svg";
import CurrentDolar from "../../assets/CurrentDolar.svg";
import { useSummary } from "../../hooks/useSummary";

export const Summary = () => {
  const ref = useRef(null);
  const summary = useSummary();

  return (
    <Container ref={ref}>
      <SummaryContainer
        drag="x"
        dragConstraints={ref}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
      >
        <SummaryCard>
          <header>
            <span>Entradas</span>
            <img src={ArrowUp} alt="" />
          </header>
          <strong>
            {summary.income.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </strong>
        </SummaryCard>
        <SummaryCard>
          <header>
            <span>Saídas</span>
            <img src={ArrowDown} alt="" />
          </header>
          <strong>
            {summary.outcome.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </strong>
        </SummaryCard>
        <SummaryCard variant>
          <header>
            <span>Total</span>
            <img src={CurrentDolar} alt="" />
          </header>
          <strong>
            {summary.total.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </strong>
        </SummaryCard>
      </SummaryContainer>
    </Container>
  );
};
