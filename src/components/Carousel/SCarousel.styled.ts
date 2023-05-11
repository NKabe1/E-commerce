import styled from "styled-components";

export const SCarouselWrapper = styled.div`
  width: 100%;
  max-height: 60vh;
`;

export const SCarouselImage = styled.img`
  width: 100%;
  max-height: 360px;
  object-fit: cover;
`;

export const SCarouselArrow = styled.div<{ mode: "left" | "right" }>`
  display: block;
  font-size: 36px;
  color: white;
  position: absolute;
  top: 50%;
  z-index: 10;
  &:hover {
    color: rgb(71, 96, 114);
  }
  left: ${({ mode }) => mode === "left" && "2%"};
  right: ${({ mode }) => mode === "right" && "2%"};
`;
