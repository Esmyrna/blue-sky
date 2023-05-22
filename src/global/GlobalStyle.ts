import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
   
 }

 body {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #87CEFA;
   
  }

`

 
export default GlobalStyle;