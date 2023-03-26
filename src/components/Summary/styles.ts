import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  width: 100%;
  overflow-x: auto;
  position: absolute;
  top: 130px;
  padding-block: 10px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const SummaryContainer = styled(motion.section)`
  width: fit-content;
  transform: none;
  height: 137px;
  display: flex;
  gap: 32px;
  @media (max-width: 1150px) {
    padding-inline: 20px;
  }
  @media (max-width: 380px) {
    gap: 16px;
  }
`;

interface SummaryCardProp {
  variant?: boolean;
}

export const SummaryCard = styled.div<SummaryCardProp>`
  display: flex;
  flex-direction: column;
  width: 352px;
  gap: 12px;
  /* width: 100%; */
  align-items: flex-start;
  padding: 24px 24px 24px 32px;
  gap: 12px;
  background: ${({ theme, variant }) =>
    variant ? theme["green-700"] : theme["gray-600"]};
  border-radius: 6px;
  header {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    span {
      font-weight: 400;
      font-size: 16px;
      line-height: 160%;
      color: ${({ theme }) => theme["gray-300"]};
    }
  }
  strong {
    font-weight: 700;
    font-size: 32px;
    line-height: 140%;
    color: ${({ theme }) => theme["gray-100"]};
  }
  @media (max-width: 380px) {
    width: 280px;
  }
`;

export const Entrada = styled.div``;
export const Saida = styled.div``;
export const Total = styled.div``;
