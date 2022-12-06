import styled from "styled-components";

export const CreateTechContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  h2 {
    font-size: 16px;
    font-weight: 600;
    color: var(--color-grey-0);
  }

  button {
    width: 32px;
    height: 32px;

    border: none;
    border-radius: 4px;

    font-size: 21px;
    color: white;

    background-color: var(--color-grey-3);
  }
`;
