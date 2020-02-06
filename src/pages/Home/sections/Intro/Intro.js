import React from "react";
import * as Section from "components/PageSection";
import IntroImg from "./assets/IntroBackground.png";
import { IntroImage } from "components/IntroImage";
import { Header, IntroWrapper } from "./styles";

export const Intro = () => (
  <IntroWrapper>
    <Section.Content>
      <IntroImage src={IntroImg} />
      <Header>
        <Section.Title>Witaj w </Section.Title>
        <Section.Description>
          Zespół, który powstał z przyjaźni i dla przyjaźni.
        </Section.Description>
      </Header>
    </Section.Content>
  </IntroWrapper>
);
