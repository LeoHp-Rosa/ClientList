import { styled } from "styled-components";

export const DashBStyle = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: var(--rich-black);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (max-width: 600px) {
    flex-direction: column;
    height: fit-content;
  }

  h1 {
    color: var(--text1);
    margin-left: auto;
    margin-right: auto;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    font-size: 48px;
  }
  header {
    width: fit-content;
    height: 10%;
    background-color: var(--ash-gray);
    display: flex;
    margin-left: auto;
    border-radius: 0px 0px 0px 16px;
    align-items: center;
    padding: 0.7rem 2rem;
    cursor: pointer;
    .addUser {
      width: 30px;
      height: 30px;
    }
    p {
      font-size: 20px;
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
    }
  }
  header:hover .addUser {
    fill: blue;
  }

  header:hover p {
    color: blue;
    cursor: pointer;
  }
  section {
    display: flex;
    flex-direction: row;
    margin-bottom: auto;
    @media (max-width: 600px) {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: fit-content;
      align-items: center;
      gap: 2rem;
    }
  }
  .userDetails {
    display: flex;
    width: 18vw;
    height: fit-content;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    margin-top: auto;
    margin-bottom: auto;
    border-radius: 1rem;
    @media (max-width: 600px) {
      width: 80vw;
    }

    .imgUser {
      width: 70px;
      height: 70px;
      path {
        fill: var(--ash-gray);
      }
    }

    .mainUser {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      p {
        color: var(--ash-gray);
        font-size: 24px;
        font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
          sans-serif;
      }
    }
  }
  .contUser {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    svg {
      width: 40px;
      height: 40px;
    }
    .editUser {
      path {
        fill: var(--ash-gray);
      }
      :hover {
        fill: orange;
        cursor: pointer;
      }
    }
    .delUser {
      path {
        fill: var(--ash-gray);
      }
      :hover {
        fill: red;
        cursor: pointer;
      }
    }
    .logout {
      path {
        stroke: var(--ash-gray);
      }
      :hover {
        stroke: red;
        cursor: pointer;
      }
    }
  }

  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: fit-content;
    width: 85vw;
    margin-top: auto;
    margin-bottom: auto;
    gap: 1rem;
    @media (max-width: 600px) {
      width: 90vw;
      align-items: center;
      flex-direction: column;
    }
    li {
      width: 290px;
      height: 150px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 1rem;
      border-radius: 1rem;
      gap: 2rem;
      color: var(--text1);
      border: 1px solid var(--text1);
      .infoCont {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
          sans-serif;

        .contact {
          display: flex;
          flex-direction: row;
          align-items: center;
          svg {
            width: 30px;
            height: 30px;
          }
          p {
            font-size: 18px;
            margin-left: 5px;
          }
        }
        .mail {
          display: flex;
          flex-direction: row;
          align-items: center;
          svg {
            width: 30px;
            height: 30px;
          }
          p {
            font-size: 18px;
            margin-left: 5px;
          }
        }
        .phone {
          display: flex;
          flex-direction: row;
          align-items: center;
          svg {
            width: 30px;
            height: 30px;
          }
          p {
            font-size: 18px;
            margin-left: 5px;
          }
        }
      }
      .EditDel {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        .edit {
          width: 25px;
          height: px;
          fill: var(--text1);
          :hover {
            fill: orange;
            cursor: pointer;
          }
        }
        .del {
          width: 20px;
          height: 20px;
          :hover {
            fill: red;
            cursor: pointer;
          }
        }
      }
    }
  }
`;
