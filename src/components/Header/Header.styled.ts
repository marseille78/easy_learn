import styled from "styled-components";
import { gl } from "../App/global";

export const Root = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 16px;
`;

export const Logo = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 40px;
  font-family: ${gl.ffSecond};
  display: flex;
  align-items: center;
  letter-spacing: 1px;
  margin-right: auto;

  div:first-child {
    margin-right: 8px;
  }

  span {
    font-family: ${gl.ffBase};
    display: block;
    line-height: 1;
    font-size: 11px;
  }
`;

export const UserButton = styled.button`
  border: none;
  padding: 0;
  background-color: transparent;
  color: ${gl.cWhite};
  cursor: pointer;

  svg {
    height: 30px;
    width: 30px;
  }
`;

export const Select = styled.div`
  margin-right: 16px;
`;
