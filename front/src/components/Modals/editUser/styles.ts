import { styled } from "styled-components";

export const EditUserModalStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;

  form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 300px;
    height: 40%;
    padding: 1rem;
    align-items: center;
    gap: 1rem;
  }
  .closeModal {
    position: absolute;
    top: 10px;
    right: 10px;
    color: var(--background);
    cursor: pointer;
    font-size: 18px;
    font-weight: 700;
  }
  .closeModal:hover {
    color: red;
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    label {
      font-size: 1rem;
      font-weight: 500;
      color: var(--text1);
      align-self: flex-start;
      text-align: left;
      color: var(--rich-black);
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
      border-radius: 0.5rem;
    }
    input:focus {
      outline: none;
      background-color: #f0f0f0;
    }

    p {
      width: fit-content;
      padding: 0.5rem;
      color: red;
      font-weight: 600;
      font-family: "Roboto", sans-serif;
      font-size: 16px;
      align-self: center;
      text-align: center;
    }
  }
  .addContact {
    padding: 1rem;
    font-family: "Roboto", sans-serif;
    border-radius: 1rem;
    font-size: 1rem;
    border: 0px;
  }
  .addContact:hover {
    transform: scale(1.05);
    cursor: pointer;
    font-weight: 600;
  }
`;
