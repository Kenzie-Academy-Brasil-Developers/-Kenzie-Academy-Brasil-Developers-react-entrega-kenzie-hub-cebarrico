import styled from "styled-components";

export const SectionMain = styled.section`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  color: var(--color-grey-0);

  padding: 30px 0;
  margin-bottom: 30px;
  max-width: 1200px;

  gap: 20px;

  animation: appear 1s ease-in-out;
  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
