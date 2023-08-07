import { styled } from "styled-components";

export const LoginPageStyle = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: var(--background);
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 600px) {
    display: flex;
  }

  img {
    width: 30%;
    height: 30%;
    @media (max-width: 600px) {
      width: 50%;
      height: 20%;
    }
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

    @media (max-width: 600px) {
      width: 80%;
      height: 40%;
    }
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
      @media (max-width: 600px) {
        font-size: 1rem;
      }
    }

    input {
      padding: 1rem;
      border-radius: 0px 8px 0px 0px;
      width: 100%;
      align-self: flex-start;
      border: 0px;
      background-color: var(--text1);
      font-size: 18px;
      @media (max-width: 600px) {
        font-size: 12px;
      }
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

  .noUser {
    width: fit-content;
    color: var(--text1);
    text-align: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    @media (max-width: 600px) {
    }

    h1 {
      font-size: 40px;
      @media (max-width: 600px) {
        font-size: 18px;
      }
    }
    span {
      padding: 1rem;
      border-radius: 1rem;
      border: 3px solid var(--text1);
      font-size: 18px;
      @media (max-width: 600px) {
        padding: 0.5rem;
        font-size: 14px;
        width: 100%;
      }
    }
    span:hover {
      background-color: var(--text1);
      color: var(--rich-black);
      cursor: pointer;
      font-weight: 700;
    }
  }
`;
