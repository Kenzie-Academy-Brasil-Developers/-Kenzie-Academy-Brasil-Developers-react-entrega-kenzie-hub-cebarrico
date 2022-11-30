import styled from "styled-components";

export const FormDefault = styled.form`
  width: 80%;
  max-width: 369px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: var(--color-grey-3);

  padding: 34px 5px;

  h1 {
    font-size: 16px;
    color: var(--color-grey-0);
    margin-bottom: 17px;
  }

  div {
    width: 90%;
    margin-bottom: 27px;
    display: flex;
    flex-direction: column;
  }
  div:last-child {
  }
  p {
    color: var(--negative);
    font-size: 10px;
  }
  label {
    font-size: 12px;
    color: var(--color-grey-0);
  }
  span {
    color: var(--color-grey-1);
    font-size: 12px;
    margin-bottom: 22px;
  }
  span:last-child {
    color: var(--color-grey-0);
    font-size: 12px;
    font-weight: 600;

    margin-top: 34px;
    margin-bottom: 22px;
  }

  select {
    width: 100%;
    height: 38px;

    background-color: var(--color-grey-2);
    color: var(--color-grey-0);

    border: 1px solid var(--color-grey-2);
    border-radius: 4px;

    padding-left: 15px;

    margin-top: 17px;
  }

  button:nth-child(1) {
    background-color: var(--color-grey-1);
    margin-top: 0px;
    border: 1px solid var(--color-grey-1);
  }
`;
