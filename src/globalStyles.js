import { createGlobalStyle } from 'styled-components';
// normalize
import { normalize } from './utils/constants/normalize';

const GlobalStyles = createGlobalStyle`
   ${normalize};

   *, *::after, *::before {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      -webkit-tap-highlight-color: transparent;
   }

   html, body {font-family: sans-serif};

   :root {
      --danger: #f74b4b;
      --info: #2e74b0;
      --gray: #888;
      --gray-2: #aaa;
      --light: #f1f1f1;
   }
   `;
export default GlobalStyles;
