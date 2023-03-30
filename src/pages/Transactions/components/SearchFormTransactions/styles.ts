import styled from "styled-components";

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
