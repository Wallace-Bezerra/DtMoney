import * as Dialog from "@radix-ui/react-dialog";
import { Content, FormModal, Overlay } from "./styles";
import Close from "../../assets/Close.svg";

export const NewTransactionModal = () => {
  return (
    <Dialog.Portal>
      <Overlay
        initial={{ opacity: 0, translateY: -30 }}
        animate={{
          translateY: 0,
          opacity: 1,
          transition: { type: "tween", duration: 0.3 },
        }}
      >
        <Content
          initial={{ translateY: -30 }}
          animate={{
            translateY: 0,
            transition: { type: "tween", duration: 0.3 },
          }}
        >
          <Dialog.Title>Nova transação</Dialog.Title>
          <Dialog.Close asChild>
            <img src={Close} alt="" />
          </Dialog.Close>
          <FormModal>
            <input type="text" placeholder="Descrição" required />
            <input type="number" placeholder="Preço" required />
            <input type="text" placeholder="Categoria" required />
            {/* <div>Entrada</div>
            <div>Saida</div> */}
            <button type="submit">Cadastrar</button>
          </FormModal>
        </Content>
      </Overlay>
    </Dialog.Portal>
  );
};
