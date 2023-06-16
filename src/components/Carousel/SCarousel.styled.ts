import styled from "styled-components";
import { colors } from "@src/assets/styles/colors/colors";
import { responsive_sizes } from "@src/assets/resposive_sizes/responsive_sizes";


export const SCarouselArrow = styled.div<{ mode: "left" | "right" }>`
  display: none;
  font-size: 24px;
  @media (min-width: ${responsive_sizes.tablet}) {
    font-size: 36px;
  }
  color: ${colors.secondary};
  border: 2px solid ${colors.hover_text};
  border-radius: 10px;
  @media (min-width: ${responsive_sizes.tablet}) {
    border-radius: 14px;
  }
  cursor: pointer;
  position: absolute;
  top: 50%;
  z-index: 10;
  &:hover {
    color: ${colors.hover_text};
  }
  left: ${({ mode }) => mode === "left" && "3%"};
  right: ${({ mode }) => mode === "right" && "3%"};
`;

export const SCarouselWrapper = styled.div`
  width: 100%;
  max-height: 60vh;
  position: relative;
  &:hover ${SCarouselArrow} {
    display: block;
  }
`;