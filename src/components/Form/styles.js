import styled from "styled-components";

export const FormWrapper = styled.div`
  display: flex;
  width: 30vw;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.color.primary};
  margin: 3.4em auto;
  box-shadow: ${({ theme }) => theme.shadow.element};
  padding: 2em 0;
  border-radius: 5px;
  color: ${({ theme }) => theme.color.black};

  select {
    padding: 1em;
    height: 2em;
    margin-top: 1em;
    background: ${({ theme }) => theme.color.white};
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
