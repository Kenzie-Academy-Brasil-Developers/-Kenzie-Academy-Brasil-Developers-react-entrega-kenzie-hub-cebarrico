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

export const CloseButton = styled.button`
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 4px;
  font-size: 21px;
  color: white;
  background-color: var(--color-grey-3);
`;
