import React from "react";
import { Wrapper, Image, Gallery, Images } from "./styled";

const AllImages = () =>
  [1, 2, 3, 4, 5, 6].map(number => (
    <Image key={number} src={`/assets/photos/slide-${number}.jpg`} />
  ));

export const Slider = () => (
  <Wrapper>
    <Gallery>
      <Images>
        <AllImages />
        <AllImages />
      </Images>
    </Gallery>
  </Wrapper>
);
