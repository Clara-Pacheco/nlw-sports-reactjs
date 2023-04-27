import { createGlobalStyle } from "styled-components";

import backgroundImg from '../assets/bg.jpg'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul {
    list-style: none;
  }

  body  {
    flex: 1;
    background: url(${backgroundImg});
    background-size: cover;
    -webkit-font-smoothing: antialiased; 
  }

  body, input, button, textarea {
    font-family: 'Inter', sans-serif;
    line-height: 160%;
    outline: none;

  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }

`;

