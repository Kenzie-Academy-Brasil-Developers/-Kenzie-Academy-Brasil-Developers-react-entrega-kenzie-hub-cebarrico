import styled from "styled-components";

export const SectionUser = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;

  color: var(--color-grey-0);

  border-top: 1px solid var(--color-grey-2);
  border-bottom: 1px solid var(--color-grey-2);

  padding: 30px 0;
  margin-bottom: 30px;

  div {
    width: 90%;
    max-width: 1200px;

    display: flex;
    flex-direction: column;

    gap: 10px;
  }

  @media (min-width: 800px) {
    div {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  h1 {
    font-size: 18px;
    height: 700;
  }
  span {
    font-size: 12px;
    height: 400;
    color: var(--color-grey-1);
  }
`;
