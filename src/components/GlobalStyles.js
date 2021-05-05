import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  #root,
  body,
  html {
    min-height: 100vh;
  }

  html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
      Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    margin: 0;
  }
`