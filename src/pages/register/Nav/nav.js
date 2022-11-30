import styled from "styled-components";

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 80%;
  max-width: 369px;

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
