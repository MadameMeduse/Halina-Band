import styled, { keyframes } from "styled-components";

export const keyFramesGallery = keyframes`
  0% {
    transform: translateX(calc(-100% + 100vw));
  }
  100% {
    transform: translateX(calc(-50% + 100vw));
  }
`

export const Wrapper = styled.div`
    margin: 60px -50vw 0 -50vw;
`;

const gradient = `
    content: ' ';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 300px;
    background: linear-gradient(90deg, rgba(248,250,253,0.8) 0%, rgba(248,250,253,0.6) 50%, rgba(248,250,253,0) 100%);
    z-index: 1;
`;

export const Gallery = styled.div`
    margin: auto;
    width: 100vw;
    position: relative;

    &:after {
        ${gradient}
        left: 0;
    }

    &:before {
        ${gradient}
        right: 0;
        transform: scaleX(-1);
    }
`;

export const Images = styled.div`
    display: inline-block;
    white-space: nowrap;
    animation: ${keyFramesGallery} 20s linear infinite;
`;

export const Image = styled.img`
    padding: 10px;
    height: 300px;
    display: inline-block;
    border-radius: 20px;
`;