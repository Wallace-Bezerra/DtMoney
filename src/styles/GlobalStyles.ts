import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration:none;
  color: inherit;
}
  
  :root {
  line-height: 1.5;
  font-weight: 400;
  color-scheme: light dark;
  color: ${({ theme }) => theme["gray-100"]};
  background-color: ${({ theme }) => theme["gray-800"]};
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
  }
body{
  /* min-height: 100vh;
  width: 100%;
  display:flex;
  flex-direction:column;
  align-items: center; */
  overflow-x: hidden;
}
body,textarea,button,input{
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
}
`;
