import styled from "styled-components";

export const Button = styled.button`
  text-align: center;
  margin: 1em auto;
  padding: 0.5em 0.2em;
  width: 9em;
  background: ${({ theme }) => theme.color.lightblue};
  font-size: ${({ theme }) => theme.font.size.md};
  border: none;
  box-shadow: ${({ theme }) => theme.shadow.element};
  border-radius: 5px;

  &:hover {
    background: ${({ theme }) => theme.color.white};
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.shadow.element};
    transform: scale(1.05);
    transition: all ease-in-out 0.2s 0.1s;
  }
`;
