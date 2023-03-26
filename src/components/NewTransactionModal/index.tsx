import * as Dialog from "@radix-ui/react-dialog";
import {
  ButtonTransaction,
  ButtonTransactionContainer,
  Content,
  FormModal,
  Overlay,
} from "./styles";
import ArrowUp from "../../assets/ArrowUp.svg";
import ArrowDown from "../../assets/ArrowDown.svg";
import Close from "../../assets/Close.svg";

export const NewTransactionModal = () => {
  return (
    <Dialog.Portal>
      <Overlay
        initial={{ opacity: 0 }}
        animate={{
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
            <img className="close" src={Close} alt="" />
          </Dialog.Close>
          <FormModal>
            <input type="text" placeholder="Descrição" required />
            <input type="number" placeholder="Preço" required />
            <input type="text" placeholder="Categoria" required />
            <ButtonTransactionContainer>
              <ButtonTransaction value="entry" variant="entry">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.25 3.75012C7.69365 3.75012 4 7.44377 4 12.0001C4 16.5565 7.69365 20.2501 12.25 20.2501C16.8063 20.2501 20.5 16.5565 20.5 12.0001C20.5 7.44377 16.8063 3.75012 12.25 3.75012ZM2.5 12.0001C2.5 6.61535 6.86522 2.25012 12.25 2.25012C17.6348 2.25012 22 6.61535 22 12.0001C22 17.3849 17.6348 21.7501 12.25 21.7501C6.86522 21.7501 2.5 17.3849 2.5 12.0001Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.25 7.50012C12.4489 7.50012 12.6396 7.57914 12.7803 7.71979L15.9584 10.8979C16.2513 11.1908 16.2513 11.6657 15.9584 11.9586C15.6655 12.2515 15.1907 12.2515 14.8978 11.9586L12.25 9.31078L9.60217 11.9586C9.30928 12.2515 8.8344 12.2515 8.54151 11.9586C8.24862 11.6657 8.24862 11.1908 8.54151 10.8979L11.7196 7.71979C11.8603 7.57914 12.0511 7.50012 12.25 7.50012Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.25 7.50012C12.6642 7.50012 13 7.83591 13 8.25012L13 15.7501C13 16.1643 12.6642 16.5001 12.25 16.5001C11.8358 16.5001 11.5 16.1643 11.5 15.7501L11.5 8.25012C11.5 7.83591 11.8358 7.50012 12.25 7.50012Z"
                    fill="white"
                  />
                </svg>
                <span>Entrada</span>
              </ButtonTransaction>
              <ButtonTransaction value="output" variant="output">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.25 3.75012C7.69365 3.75012 4 7.44377 4 12.0001C4 16.5565 7.69365 20.2501 12.25 20.2501C16.8063 20.2501 20.5 16.5565 20.5 12.0001C20.5 7.44377 16.8063 3.75012 12.25 3.75012ZM2.5 12.0001C2.5 6.61535 6.86522 2.25012 12.25 2.25012C17.6348 2.25012 22 6.61535 22 12.0001C22 17.3849 17.6348 21.7501 12.25 21.7501C6.86522 21.7501 2.5 17.3849 2.5 12.0001Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.25 7.50012C12.4489 7.50012 12.6396 7.57914 12.7803 7.71979L15.9584 10.8979C16.2513 11.1908 16.2513 11.6657 15.9584 11.9586C15.6655 12.2515 15.1907 12.2515 14.8978 11.9586L12.25 9.31078L9.60217 11.9586C9.30928 12.2515 8.8344 12.2515 8.54151 11.9586C8.24862 11.6657 8.24862 11.1908 8.54151 10.8979L11.7196 7.71979C11.8603 7.57914 12.0511 7.50012 12.25 7.50012Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.25 7.50012C12.6642 7.50012 13 7.83591 13 8.25012L13 15.7501C13 16.1643 12.6642 16.5001 12.25 16.5001C11.8358 16.5001 11.5 16.1643 11.5 15.7501L11.5 8.25012C11.5 7.83591 11.8358 7.50012 12.25 7.50012Z"
                    fill="white"
                  />
                </svg>
                <span>Saida</span>
              </ButtonTransaction>
            </ButtonTransactionContainer>
            <button type="submit">Cadastrar</button>
          </FormModal>
        </Content>
      </Overlay>
    </Dialog.Portal>
  );
};
