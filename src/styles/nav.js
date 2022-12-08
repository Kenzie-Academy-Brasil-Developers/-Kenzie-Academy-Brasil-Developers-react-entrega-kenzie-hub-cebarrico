import styled from "styled-components";

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 80%;
  max-width: 369px;

  animation: appear 1s ease-in-out;

  button {
    width: 80px;
    height: 32px;

    background-color: var(--color-grey-3);
    border: none;
    border-radius: 4px;

    color: var(--color-grey-0);

    font-size: 12px;
    font-weight: 600;

    cursor: pointer;
  }
  a {
    width: 80px;
    height: 32px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--color-grey-3);
    border: none;
    border-radius: 4px;

    color: var(--color-grey-0);
    text-decoration: none;

    font-size: 12px;
    font-weight: 600;

    cursor: pointer;

    @keyframes appear {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;

export const NavUser = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 90%;
  max-width: 1200px;

  padding: 30px 0;

  animation: appear 1s ease-in-out;
  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  button {
    width: 80px;
    height: 32px;

    background-color: var(--color-grey-3);
    border: none;
    border-radius: 4px;

    color: var(--color-grey-0);

    font-size: 12px;
    font-weight: 600;

    cursor: pointer;
  }
`;
