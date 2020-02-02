import React from "react";

import * as Section from "components/PageSection";
import Form from "components/Form/Form";

export const RulesAndSuggestions = () => (
  <Section.Wrapper>
    <Section.Content>
      <Section.Header>
        <Section.Title>Contact Us</Section.Title>
        <Section.BulletedList>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            repellendus beatae iusto non culpa optio deleniti. Fugiat,
            voluptatum minima, cum assumenda sapiente dolore, temporibus dolores
            officia nobis doloribus minus et!{" "}
          </li>
        </Section.BulletedList>
      </Section.Header>
      <Form />
    </Section.Content>
  </Section.Wrapper>
);
