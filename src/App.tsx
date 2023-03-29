import { ThemeProvider } from "styled-components";
import { TransacionsProvider } from "./context/TransactionsContext";
import { Transactions } from "./pages/Transactions";
import { GlobalStyle } from "./styles/GlobalStyles";
import { theme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <TransacionsProvider>
        <Transactions />
      </TransacionsProvider>
    </ThemeProvider>
  );
}
