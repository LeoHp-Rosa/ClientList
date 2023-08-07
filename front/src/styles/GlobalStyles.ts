import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}
:root{
--rich-black: #000418ff;
--paynes-gray: #5c6672ff;
--slate-gray: #6c6f7fff;
--nyanza: #e5ffdeff;
--ash-gray: #bbcbcbff;
--background: #030303;
--text1: #fafaff;
}
body,html{
    width: 100vw;
    height: 100vh;
}
.btnForm{
   padding: 0.5rem;
    width: 60%;
    color: var(--rich-black);
    font-size: 1.5rem;
    font-weight: 500;
    align-self: center;
    border-radius: 0.5rem;
    @media (max-width: 600px) {
        width: 80%;
        font-size: 14px;
        padding: 1rem;
      }
}
.btnForm:hover {
      cursor: pointer;
      transform: scale(1.05);
      font-weight: 600;
    }
`;
