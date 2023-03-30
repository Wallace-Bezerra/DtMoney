import styled from "styled-components";

export const TransactionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  padding-top: 350px;
  padding-inline: 20px;
  .main {
    max-width: 1120px;
    width: 100%;
  }
`;

export const TableContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  .item {
    background: ${({ theme }) => theme["gray-700"]};
    border-radius: 5px;
    padding: 20px 32px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    color: ${({ theme }) => theme["gray-300"]};
    h2 {
      /* flex-grow: 2; */
      width: 50%;
      font-size: 16px;
      font-weight: 400;
    }
    span {
      flex: 1;
      &:last-child {
        flex-grow: 0;
      }
    }
  }
`;
interface PriceHighLightProps {
  status?: "income" | "outcome";
}

export const PriceHighLight = styled.span<PriceHighLightProps>`
  color: ${({ theme, status }) =>
    status === "income" ? theme["green-300"] : theme["red-300"]};
`;
