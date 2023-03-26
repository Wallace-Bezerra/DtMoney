import { useRef } from "react";
import { Container, SummaryContainer, SummaryCard } from "./styles";
import ArrowUp from "../../assets/ArrowUp.svg";
import ArrowDown from "../../assets/ArrowDown.svg";
import CurrentDolar from "../../assets/CurrentDolar.svg";

export const Summary = () => {
  const ref = useRef(null);
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
          <strong>R$ 17.4000,00</strong>
        </SummaryCard>
        <SummaryCard>
          <header>
            <span>Saídas</span>
            <img src={ArrowDown} alt="" />
          </header>
          <strong>R$ 1.259,00</strong>
        </SummaryCard>
        <SummaryCard variant>
          <header>
            <span>Total</span>
            <img src={CurrentDolar} alt="" />
          </header>
          <strong>R$ 16.141,00</strong>
        </SummaryCard>
      </SummaryContainer>
    </Container>
  );
};
