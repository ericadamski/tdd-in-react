import React from "react";
import App, { Container } from "next/app";
import { createGlobalStyle } from "styled-components";
import Colors from "../utils/colors";

const GlobalStyles = createGlobalStyle`
  // #region fonts
  /* latin-ext */
  @font-face {
    font-family: 'Alfa Slab One';
    font-style: normal;
    font-weight: 400;
    src: local('Alfa Slab One Regular'), local('AlfaSlabOne-Regular'), url(https://fonts.gstatic.com/s/alfaslabone/v8/6NUQ8FmMKwSEKjnm5-4v-4Jh2dxhe_escmAm9w.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Alfa Slab One';
    font-style: normal;
    font-weight: 400;
    src: local('Alfa Slab One Regular'), local('AlfaSlabOne-Regular'), url(https://fonts.gstatic.com/s/alfaslabone/v8/6NUQ8FmMKwSEKjnm5-4v-4Jh2dJhe_escmA.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu7GxKKTU1Kvnz.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  // #endregion

  html,body {
    font-family: 'Roboto', sans-serif;
    *, *::before, *::after {
      box-sizing: border-box;
    }
    margin: 0;
    padding: 0
    background-color: ${Colors.white};
    color: ${Colors.grey};
  }
`;

export default class A extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <GlobalStyles />
        <Component {...pageProps} />
      </Container>
    );
  }
}
