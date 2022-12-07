import styled from "styled-components";

export const MainTechList = styled.ul`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 16px;

  background-color: var(--color-grey-2);
  border-radius: 4px;

  padding: 22px 0;

  li {
    width: 90%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: var(--color-grey-3);
    border-radius: 4px;

    padding: 10px;
  }
`;
