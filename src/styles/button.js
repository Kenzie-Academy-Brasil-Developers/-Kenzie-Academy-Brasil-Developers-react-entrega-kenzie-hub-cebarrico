import styled from "styled-components";

export const ButtonDefault = styled.button`
  width: 90%;
  height: 38px;

  background-color: var(--color-primary);
  color: var(--color-grey-0);

  border: 1px solid var(--color-primary);
  border-radius: 4px;
  margin-top: 25px;
  margin-bottom: 32px;

  cursor: pointer;

  &:disabled {
    border: 1px solid var(--color-primary-negative);
    background-color: var(--color-primary-negative);
  }
`;

export const ButtonDefaultBlack = styled.button`
  width: 90%;
  height: 38px;

  background-color: var(--color-grey-1);
  color: var(--color-grey-0);

  border: 1px solid var(--color-grey-1);
  border-radius: 4px;

  margin-bottom: 32px;

  cursor: pointer;
`;
