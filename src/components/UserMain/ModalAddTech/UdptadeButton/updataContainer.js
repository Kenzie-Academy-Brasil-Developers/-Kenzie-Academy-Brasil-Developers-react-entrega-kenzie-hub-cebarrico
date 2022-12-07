import styled from "styled-components";

export const UpdateContainer = styled.div`
  display: flex;
  flex-direction: row !important;

  button {
    width: 60%;
    max-width: 204px;
    height: 48px;

    background-color: var(--color-primary);

    font-weight: 500;
    font-size: 16px;
    color: var(--color-grey-0);

    border: none;
    border-radius: 4px;

    margin-top: 20px;
  }

  .deleteBtm {
    width: 30%;
    max-width: 98px;

    background-color: var(--color-grey-1);
  }
`;
