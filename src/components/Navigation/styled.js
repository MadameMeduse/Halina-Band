import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.ul`
  list-style: none;
  display: flex;
`;

export const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  margin: 10px;
  border-bottom: 1px solid black;
  padding-bottom: 0.25em;
  font-weight: ${({ theme }) => theme.font.weight.light};
  font-size: ${({ theme }) => theme.font.size.md};
  &:hover {
    color: white;
    background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/squiggle.svg");
    background-position: bottom;
    background-repeat: repeat-x;
    background-size: 20%;
    border-bottom: 0;
    padding-bottom: 0.3em;
    text-decoration: none;
    transform: scale(1.1);
  }
`;
