import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;

    font-family: 'Montserrat', sans-serif;
    font-family: 'Poppins', sans-serif; 
  }
  body {
    -webkit-font-smoothing: antialiased !important;

    width: 100vw;
    height: 100vh;
    padding: var(--layout-padding);
    font-size: 16px;
    font-weight: normal;

    background: rgb(63,94,251);
    background: linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(70,252,131,1) 100%);
    color: var(--text-color);
  }
  .MuiTypography-root {
    font-family: 'Montserrat', sans-serif !important;
    font-family: 'Poppins', sans-serif !important; 
  }
  @media (max-width: 1080px) {
    html {
      font-size: 93.75%; //15px
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 106.25%; //17px
    }
  }

  :root {
    --text-color: white;
    --layout-padding: 10px;
    --page-padding: 10px;
    --border-radius: 10px;

    --container: #151718;
    --input: #1D1F20;
  }

  input {
    border-radius: 5px;
    padding: 5px;
  }

`;

export default GlobalStyle;
