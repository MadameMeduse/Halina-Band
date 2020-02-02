import React from "react";

import { ExamplePreview } from "components/ExamplePreview";
import * as S from "components/PageSection";

import previewImg from "./assets/Task3Image.jpg";

export const Task3 = () => (
  <S.Wrapper>
    <S.Content>
      <S.Header>
        <S.Title>Halina Band</S.Title>
        <S.Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          repellendus beatae iusto non culpa optio deleniti. Fugiat, voluptatum
          minima, cum assumenda sapiente dolore, temporibus dolores officia
          nobis doloribus minus et!
        </S.Description>
        <S.BulletedList>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            voluptate tempora iste, sapiente temporibus perspiciatis neque
            fugiat cupiditate fuga? Veritatis nam perferendis dolore mollitia et
            omnis repellendus, doloribus porro assumenda!{" "}
          </li>

          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa iusto
            a nostrum ipsum, magni laudantium voluptate! Odio, ex. Corrupti ea
            quasi soluta in quisquam eum labore non. Reiciendis, aliquam
            expedita.
          </li>
        </S.BulletedList>
        <br />
        <S.Description>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad quaerat
          nisi error doloribus corrupti molestias aliquid fugiat saepe
          similique. At incidunt cumque esse quidem, placeat quia quas eveniet
          nisi. Repellendus.{" "}
        </S.Description>
        <ExamplePreview src={previewImg} />
        <S.Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          repudiandae dolores quae ad aspernatur eveniet placeat, sapiente alias
          iusto magni ex cum facere doloribus culpa maiores asperiores nemo in
          tenetur.{" "}
        </S.Description>
      </S.Header>
    </S.Content>
  </S.Wrapper>
);
