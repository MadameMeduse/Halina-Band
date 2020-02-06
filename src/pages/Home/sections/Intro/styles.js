import styled from "styled-components";

export const IntroWrapper = styled.div`
  height: 100vh;
  background: ${({ theme }) => theme.color.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Header = styled.div`
  text-align: left;
  margin: 1rem auto;
  padding: 4rem;
  position: absolute;
  bottom: 11rem;
  z-index: 1;
`;

export const IntroImage = styled.img`
  transform: rotateX(180deg) rotateY(180deg);
`;
