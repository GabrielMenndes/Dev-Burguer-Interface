import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

const globalStyles = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        font-style: normal;
    }

    html, body {
        overflow-x: hidden;
        width: 100vw;
        max-width: 100vw;
    }

    button {
        cursor: pointer;
    }
    
    a {
        cursor: pointer;
    }
`;

export default globalStyles;
