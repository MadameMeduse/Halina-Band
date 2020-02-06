import React from "react";
import styled from "styled-components";

const Root = styled.p`
  font-family: TTCommons-bold, sans-serif;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.black};
  margin: 0;
  padding: 2rem 0 1rem;
  text-align: center;
`;

export const Footer = () => (
  <Root>
    by Monika Waligóra,
    <br /> All Rights Reserved 2020{" "}
  </Root>
);
