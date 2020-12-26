import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px 0px 0px 0px;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.2s linear;

    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu;
    font-size: 14px;
  }`;

export default GlobalStyle;
