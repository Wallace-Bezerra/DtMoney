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
export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: space-between;
  margin-bottom: 24px;
  input {
    width: 100%;
    padding: 16px;
    border: none;
    background-color: ${({ theme }) => theme["gray-900"]};
    color: ${({ theme }) => theme["gray-100"]};
    outline-color: ${({ theme }) => theme["green-300"]};
    border-radius: 6px;
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
  }
  button {
    padding: 14px 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme["green-300"]};
    color: ${({ theme }) => theme["green-300"]};
    font-weight: 700;
    font-size: 16px;
    line-height: 160%;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
    :hover {
      background-color: ${({ theme }) => theme["green-500"]};
      color: ${({ theme }) => theme.white};
      border: 1px solid transparent;
      svg {
        path {
          fill: ${({ theme }) => theme.white};
        }
      }
    }
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
      flex-grow: 2;
      font-size: 16px;
      font-weight: 400;
    }
    span {
      flex-grow: 1;
      &:last-child {
        flex-grow: 0;
      }
    }
  }
`;
interface PriceHighLightProps {
  status?: "green" | "red";
}

export const PriceHighLight = styled.span<PriceHighLightProps>`
  color: ${({ theme, status }) =>
    status === "green" ? theme["green-300"] : theme["red-300"]};
`;
