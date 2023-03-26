import styled from "styled-components";
import { motion } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";

export const Overlay = styled(motion(Dialog.Overlay))`
  background-color: #000000bf;
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
`;
export const Content = styled(motion(Dialog.Content))`
  width: 535px;
  height: 528px;
  padding: 48px;
  position: relative;
  background-color: ${({ theme }) => theme["gray-800"]};
  box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.8);
  border-radius: 6px;
  h2 {
    margin-bottom: 32px;
  }
  .close {
    cursor: pointer;
    position: absolute;
    top: 24px;
    right: 24px;
  }
`;

export const FormModal = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  input {
    padding: 16px;
    border-radius: 6px;
    background-color: ${({ theme }) => theme["gray-900"]};
    color: ${({ theme }) => theme.white};
    ::placeholder {
      font-weight: 400;
      font-size: 16px;
      line-height: 140%;
      color: ${({ theme }) => theme["gray-500"]};
    }
  }
  button[type="submit"] {
    padding: 16px 32px;
    background: ${({ theme }) => theme["green-500"]};
    border-radius: 6px;
    color: ${({ theme }) => theme.white};
    font-weight: 700;
    font-size: 16px;
    line-height: 160%;
  }
`;
export const ButtonTransactionContainer = styled(RadioGroup.Root)`
  display: flex;
  gap: 16px;
  margin-bottom:30px;
`;
interface ButtonTransactionProps {
  variant: "entry" | "output";
}
export const ButtonTransaction = styled(RadioGroup.Item)<ButtonTransactionProps>`
  padding: 16px 24px;
  background: #29292e;
  border-radius: 6px;
  width: 100%;
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  transition: background-color .3s cubic-bezier(0.19, 1, 0.22, 1);
  svg {
    path {
      fill: ${({ theme, variant }) =>
        variant === "entry" ? theme["green-300"] : theme["red-300"]};
    }
  }
  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    color: ${({ theme }) => theme["gray-300"]};
  }

  &[data-state="checked"] {
    background: ${({ theme, variant }) =>
      variant === "entry" ? theme["green-700"] : theme["red-500"]};
    span {
      color: white;
    }
    svg {
      path {
        fill: white;
      }
    }
  }
  &[data-state="unchecked"]:hover{
    background: ${({ theme}) =>
       theme["gray-600"]};
  }
`;
