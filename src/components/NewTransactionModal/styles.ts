import styled from "styled-components";
import { motion } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";

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
  img {
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
    color: ${({ theme }) => theme["gray-500"]};
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
