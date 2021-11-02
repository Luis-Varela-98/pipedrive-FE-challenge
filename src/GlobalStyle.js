import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --maxWidth: 1280px;
    --white: #fff;
    --lightGrey: #eee;
    --medGrey: #353535;
    --darkGrey: rgb(28,28,28);
    --fontSuperBig: 2.5rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;
  }

  * {
    box-sizing: border-box;
    font-family: 'Abel', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    
    h1 {
      font-size: 2rem;
      font-weight: 600;
      color: var(--white);
    }

    h3 {
      font-size: 1.1rem;
      font-weight: 600;
    }

    p {
      font-size: 1rem;
      color: var(--white);
    }

    .ReactModal__Content {
      opacity: 0;
      transform: translateX(-100px);
      transition: all 500ms ease-in-out;
    }
    
    .ReactModal__Content--after-open {
      opacity: 1;
      transform: translateX(0px);
    }
    
    .ReactModal__Content--before-close {
      opacity: 0;
      transform: translateX(-100px);
    }
  }
`;