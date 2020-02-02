import styled from "styled-components";

export const Button = styled.button`
  align-text: center;
  margin: 1rem auto;
  padding: 1rem;
  background: ${({ theme }) => theme.color.primary};
  border-radius: 5px;
`;
