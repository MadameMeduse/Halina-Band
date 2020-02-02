import React from "react";
import { Wrapper, StyledLink } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Navigation = () => (
  <Wrapper>
    <li>
      <StyledLink to="/my-profile">o nas</StyledLink>
    </li>
    <li>
      <StyledLink to="/gallery">galeria</StyledLink>
    </li>
    <li>
      <StyledLink to="/video">video</StyledLink>
    </li>
    <li>
      <StyledLink to="/contact">kontakt</StyledLink>
    </li>
    <li>
      <StyledLink to="/shop">Sklep</StyledLink>
    </li>
    <li>
      <StyledLink to="/language">
        <FontAwesomeIcon icon="fa-globe-americas" />
      </StyledLink>
    </li>
  </Wrapper>
);
