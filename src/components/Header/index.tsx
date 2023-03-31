import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import * as Dialog from "@radix-ui/react-dialog";
import logo from "../../assets/Logo.svg";
import { NewTransactionModal } from "../NewTransactionModal";
import { useState } from "react";
export const Header = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="logo" />
        <Dialog.Root open={modalIsOpen} onOpenChange={setModalIsOpen}>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal setModalIsOpen={setModalIsOpen} />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
};
