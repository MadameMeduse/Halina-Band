import styled from "styled-components";

export const FormWrapper = styled.div`
  display: flex;
  width: 30vw;
  flex-direction: column;
  align-items: center;
  background: white;
  margin: 3.4em auto;
  box-shadow: ${({ theme }) => theme.shadow.element};
  padding: 2em 0;
  border-radius: 5px;
  color: ${({ theme }) => theme.color.shuttleGray};

  select {
    padding: 1em;
    height: 2em;
    margin-top: 1em;
    background: transparent;
    border: ${({ theme }) => theme.border.inputborder};
    color: ${({ theme }) => theme.color.shuttleGray};
  }
  textarea {
    padding: 1em;
    border-radius: 5px;
    border: ${({ theme }) => theme.border.inputborder};
  }
`;

export const FormTitle = styled.h1`
  font-size: ${({ theme }) => theme.font.size.lg};
`;

export const Label = styled.label`
  display: flex;
  width: 20vw;
  flex-flow: column;
  margin: 0.4em auto;
`;

export const Input = styled.input`
  padding: 1em;
  border-radius: 5px;
  border: ${({ theme }) => theme.border.inputborder};
`;

export const Button = styled.button`
  align-text: center;
  margin: 1em auto;
  padding: 0.5em 0.2em;
  width: 9em;
  background: white;
  font-size: ${({ theme }) => theme.font.size.md};
  border: ${({ theme }) => theme.border.inputborder};
  &:hover {
    background: ${({ theme }) => theme.color.primary};
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.shadow.element};
    transform: scale(1.05);
    transition: all ease-in-out 0.2s 0.1s;
    border: ${({ theme }) => theme.border.inputborder};
  }
`;
