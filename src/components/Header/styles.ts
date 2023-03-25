import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme["gray-900"]};
  height: 212px;
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
`;

export const HeaderContent = styled.div`
  max-width: 1160px;
  margin: 0 auto;
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 40px;
  padding-inline: 20px;
`;
export const NewTransactionButton = styled.button`
  padding: 12px 20px;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme["green-500"]};
  border: none;
  border-radius: 6px;
  font-weight: 700;
  font-size: 16px;
  line-height: 160%;
  cursor: pointer;
  transition: background 0.4s;
  :hover {
    background-color: ${({ theme }) => theme["green-700"]};
  }
`;
