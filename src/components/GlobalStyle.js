import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        padding: 0;
        margin:0;
    }

    body{
        font-family: 'Source Sans Pro',sans-serif;
    }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  padding: 0 50px;
  margin: 0 auto;
  z-index: 1;
  @media screen and(max-width: 991px) {
    padding: 0 30px;
  }
`;
