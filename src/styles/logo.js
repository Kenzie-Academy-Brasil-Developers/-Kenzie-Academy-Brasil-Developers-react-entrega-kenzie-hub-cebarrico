import styled from "styled-components";

export const LogoStyle = styled.img`
  margin-bottom: 20px;
  margin-top: 30px;

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
