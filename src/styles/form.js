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

  animation: appear 1s ease-in-out;

  h1 {
    font-size: 16px;
    color: var(--color-grey-0);
    margin-bottom: 17px;
  }

  div {
    width: 90%;
    margin-bottom: 7px;
    display: flex;
    flex-direction: column;
  }

  fieldset {
    width: 90%;
    margin-bottom: 7px;
    display: flex;
    flex-direction: column;
    border: none;
    position: relative;
  }

  i {
    position: absolute;
    right: 3%;
    top: 58%;
    cursor: pointer;
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
  a {
    width: 90%;
    height: 38px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--color-grey-1);
    color: var(--color-grey-0);

    text-decoration: none;

    border: 1px solid var(--color-grey-1);
    border-radius: 4px;

    margin-bottom: 32px;

    cursor: pointer;
  }

  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
