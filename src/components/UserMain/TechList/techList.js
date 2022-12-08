import styled from "styled-components";

export const MainTechList = styled.ul`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 16px;

  background-color: var(--color-grey-3);
  border-radius: 4px;

  padding: 22px 12px;

  li {
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: var(--color-grey-4);
    border-radius: 4px;

    padding: 10px;

    animation: slide 0.3s ease;

    cursor: pointer;
  }

  li:hover {
    background-color: var(--color-grey-2);
  }
  h3 {
    font-weight: 700;
    font-size: 14.2123px;
  }

  .statusContainer {
    width: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  span {
    font-weight: 400;
    font-size: 12.182px;
    z-index: 5;
  }

  @keyframes slide {
    0% {
      transform: translateX(100px);
    }
    100% {
      transform: translateX(0);
    }
  }
`;
