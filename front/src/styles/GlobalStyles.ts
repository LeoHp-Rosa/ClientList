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


--gradient-top: linear-gradient(0deg, #000418ff, #5c6672ff, #6c6f7fff, #e5ffdeff, #bbcbcbff);
--gradient-right: linear-gradient(90deg, #000418ff, #5c6672ff, #6c6f7fff, #e5ffdeff, #bbcbcbff);
--gradient-bottom: linear-gradient(180deg, #000418ff, #5c6672ff, #6c6f7fff, #e5ffdeff, #bbcbcbff);
--gradient-left: linear-gradient(270deg, #000418ff, #5c6672ff, #6c6f7fff, #e5ffdeff, #bbcbcbff);
--gradient-top-right: linear-gradient(45deg, #000418ff, #5c6672ff, #6c6f7fff, #e5ffdeff, #bbcbcbff);
--gradient-bottom-right: linear-gradient(135deg, #000418ff, #5c6672ff, #6c6f7fff, #e5ffdeff, #bbcbcbff);
--gradient-top-left: linear-gradient(225deg, #000418ff, #5c6672ff, #6c6f7fff, #e5ffdeff, #bbcbcbff);
--gradient-bottom-left: linear-gradient(315deg, #000418ff, #5c6672ff, #6c6f7fff, #e5ffdeff, #bbcbcbff);
--gradient-radial: radial-gradient(#000418ff, #5c6672ff, #6c6f7fff, #e5ffdeff, #bbcbcbff);
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
}
.btnForm:hover {
      cursor: pointer;
      transform: scale(1.05);
      font-weight: 600;
    }
`;
