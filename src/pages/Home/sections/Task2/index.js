import React from "react";

import { ExamplePreview } from "components/ExamplePreview";
import * as Section from "components/PageSection";

import previewImg from "./assets/Task2Image.jpg";

export const Task2 = () => (
  <Section.Wrapper>
    <Section.Content>
      <Section.Header>
        <Section.Title>Halina Band</Section.Title>
        <Section.Description>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
          nostrum vel, amet sed qui impedit voluptate natus beatae animi labore
          at, perspiciatis nihil rerum ullam excepturi aliquam magnam ex.
          Tempore.
        </Section.Description>
        <ExamplePreview src={previewImg} />
        <Section.Description>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
          at nihil, perferendis aperiam obcaecati, facere, perspiciatis non
          assumenda iste possimus debitis aspernatur sequi! Quae voluptatibus
          odit officia maxime. Unde, natus!
        </Section.Description>
      </Section.Header>
    </Section.Content>
  </Section.Wrapper>
);
