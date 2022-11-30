import styled from "styled-components";

export const FormLogin = styled.form`
  width: 80%;
  max-width: 369px;
  height: 442px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: var(--color-grey-3);

  padding-bottom: 10px;

  h1 {
    font-size: 16px;
    color: var(--color-grey-0);
    margin-bottom: 17px;
  }

  div {
    width: 90%;
    margin-bottom: 27px;
  }

  label {
    margin-top: 26px;
    margin-bottom: 17px;

    font-size: 12px;
    color: var(--color-grey-0);
  }

  span {
    color: var(--color-grey-0);
    font-size: 12px;
    font-weight: 600;

    margin-top: 34px;
    margin-bottom: 22px;
  }

  button:last-child {
    background-color: var(--color-grey-1);
    margin-top: 0px;
    border: 1px solid var(--color-grey-1);
  }
`;
