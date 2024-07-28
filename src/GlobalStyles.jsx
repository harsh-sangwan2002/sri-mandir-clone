// GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
 html, body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: 'Noto Sans', sans-serif;
    font-weight: 300;
    box-sizing: border-box;
    width: 100%;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;