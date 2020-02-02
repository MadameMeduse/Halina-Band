import React from "react";
import * as Section from "components/PageSection";
import IntroImg from "./assets/IntroBackground.png";
import { IntroImage } from "components/IntroImage";
import { Header } from "./styles";

export const Intro = () => (
  <Section.Wrapper>
    <Section.Content>
      <IntroImage src={IntroImg} />
      <Header>
        <Section.Title>Witaj w Halina Band</Section.Title>
        <Section.Description>
          Halina Band to zespół, który powstał z przyjaźni i dla przyjaźni.
        </Section.Description>
      </Header>
    </Section.Content>
  </Section.Wrapper>
);
