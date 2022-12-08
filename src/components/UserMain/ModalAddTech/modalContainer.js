import styled from "styled-components";
export const ModalBackground = styled.div`
  width: 100%;
  height: 100vh;

  position: fixed;
  top: 0;
  z-index: 10;
  background-color: rgba(18, 18, 20, 0.5); ;
`;
export const ModalContainer = styled.div`
  width: 90%;

  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: absolute;
  margin: 0 auto;
  top: 20%;
  left: 0;
  right: 0;

  padding: 20px;
  background-color: var(--color-grey-3);

  div {
    display: flex;
    justify-content: space-between;
    width: 90%;
  }

  form {
    width: 100%;
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

  .addTech {
    width: 90%;
    height: 38px;

    background-color: var(--color-primary);
    color: var(--color-grey-0);
    font-size: 16px;

    border: 1px solid var(--color-primary);
    border-radius: 4px;
    margin-top: 25px;

    cursor: pointer;

    &:disabled {
      border: 1px solid var(--color-primary-negative);
      background-color: var(--color-primary-negative);
    }
  }
`;
