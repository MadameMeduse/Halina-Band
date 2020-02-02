import React from "react";
import styled from "styled-components";

import logoImg from "./assets/logo.png";

export const Logo = () => <img alt="Halina Band Logo" src={logoImg} />;

export const Root = styled.header`
  height: 5rem;
  box-shadow: ${({ theme }) => theme.shadow.element};
  background: #fbe0ce;
  position: fixed;
  width: 100vw;
  z-index: 100;
`;

export const Wrapper = styled.div`
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-transform: capitalize;
  font-family: ${({ theme }) => theme.font.family.main};
`;
