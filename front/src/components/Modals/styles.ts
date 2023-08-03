import { styled } from "styled-components";

export const DelContModalStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 1rem;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;

  span {
    position: absolute;
    top: 10px;
    right: 10px;
    color: var(--background);
    cursor: pointer;
    font-size: 18px;
    font-weight: 700;
  }
  span:hover {
    color: red;
  }

  p {
    font-size: 24px;
    font-weight: 500;
    width: 400px;
    text-align: center;
  }

  .divBtns {
    display: flex;
    gap: 30px;
    .yes {
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      border: none;
      color: var(--text1);
      background-color: var(--background);
      font-size: 18px;
    }
    .not {
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      border: none;
      color: var(--text1);
      background-color: var(--background);
      font-size: 18px;
    }
    .not:hover {
      cursor: pointer;
      color: var(--text1);
      background-color: red;
      transform: scale(1.05);
      font-weight: 600;
    }
    .yes:hover {
      cursor: pointer;
      color: var(--text1);
      background-color: green;
      transform: scale(1.05);
      font-weight: 600;
    }
  }
`;
