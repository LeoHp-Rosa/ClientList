import { styled } from "styled-components";

export const LoginPageStyle = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: var(--background);
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 30%;
    height: 30%;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 25%;
    height: 40%;
    padding: 1rem;
    align-items: center;
    gap: 2rem;
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    label {
      font-size: 1.5rem;
      font-weight: 500;
      color: var(--text1);
      align-self: flex-start;
      text-align: left;
      color: var(--rich-black);
      background-color: var(--text1);
      padding: 0.3rem 0.8rem;
      border-radius: 0px 8px 0px 0px;
      font-family: "Roboto", sans-serif;
    }

    input {
      padding: 1rem;
      border-radius: 0px 8px 0px 0px;
      width: 100%;
      align-self: flex-start;
      border: 0px;
      background-color: var(--text1);
      font-size: 18px;
    }
    input:focus {
      outline: none;
      background-color: #f0f0f0;
    }

    p {
      width: fit-content;
      padding: 0.5rem;
      background-color: var(--text1);
      color: red;
      font-weight: 600;
      font-family: "Roboto", sans-serif;
      font-size: 16px;
      border-radius: 0px 0px 0px 8px;
      align-self: flex-end;
    }
  }
`;
