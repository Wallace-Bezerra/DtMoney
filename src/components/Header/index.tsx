import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logo from "../../assets/Logo.svg";
export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="logo" />
        <NewTransactionButton>Nova transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  );
};
