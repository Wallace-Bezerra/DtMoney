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
export const SummaryContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 352px;
  /* width: 100%; */
  align-items: flex-start;
  padding: 24px 24px 24px 32px;
  gap: 12px;
  background: #323238;
  border-radius: 6px;
  @media (max-width: 380px) {
    width: 280px;
  }
`;
