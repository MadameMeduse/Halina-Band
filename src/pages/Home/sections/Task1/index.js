import React from "react";

import { ExamplePreview } from "components/ExamplePreview";
import * as Section from "components/PageSection";
import previewImg from "./assets/halinaBAND.jpg";
import { Slider } from "../../../../components/Slider";

export const Task1 = () => (
  <Section.Wrapper>
    <Section.Content>
      <Section.Header>
        <Section.Title>Halina Band</Section.Title>
        <Section.Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          ratione cupiditate voluptate nobis architecto, omnis at qui sapiente?
          Rem enim sunt pariatur corporis voluptates porro dolor consequuntur, a
          doloribus accusamus!
        </Section.Description>
        <Section.Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
          odit. Perferendis in nemo ratione culpa exercitationem sapiente
          praesentium debitis provident illo cupiditate, doloremque repellat
          magni eligendi dolorum quis quod dicta?
        </Section.Description>
        <ExamplePreview src={previewImg} />
        <Section.Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          sunt porro eveniet voluptatem modi necessitatibus ut! Recusandae odio
          veritatis nemo exercitationem excepturi at officiis pariatur,
          blanditiis ea itaque rerum mollitia.
        </Section.Description>
        <br />
        <Section.Description>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio odit
          reiciendis exercitationem nulla dolores delectus veniam dolor
          inventore perspiciatis non. Sunt veniam quae odio reiciendis vero eius
          placeat, maiores minima.{" "}
        </Section.Description>
      </Section.Header>

      <Slider />
    </Section.Content>
  </Section.Wrapper>
);
