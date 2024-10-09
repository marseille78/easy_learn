import { createGlobalStyle } from "styled-components";

export const gl = {
  ffBase: '"Nunito", sans-serif',
  ffSecond: '"Protest Strike", sans-serif',
  cLine: '#5551c2',
  cWhite: '#fdfdfd',
};

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing:border-box;
  }
  body {
    background-color: #0A092D;
    font-family: ${gl.ffBase};
    font-size: 18px;
    line-height: 1.3;
    color: ${gl.cWhite};
  }
  main {
    padding: 0 16px;
  }
`;
