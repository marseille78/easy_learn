import "./vars";
import "modern-normalize";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
        background-color: var(--red);
        font-size: 16px;
    }
`;