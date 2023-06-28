import styled from "styled-components";
import { responsive_sizes } from "@src/assets/resposive_sizes/responsive_sizes";
import { font_sizes } from "@src/assets/styles/fonts/fonts";

type SFeaturedCardProps = {
  image: string;
};

export const SFeaturedCard = styled.div<SFeaturedCardProps>`
  position: relative;
  height: 160px;
  @media (min-width: ${responsive_sizes.tablet}) {
    height: 180px;
  }
  @media (min-width: ${responsive_sizes.desktop_small}) {
    height: 200px;
  }
  border-radius: 12px;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    transform-origin: center center;
    transform: scale(1);
    transition: transform 0.3s ease;
  }

  &:hover:before {
    transform: scale(1.2);
  }

  & > p {
    position: relative;
    color: white;
    font-size: 20px;
    @media (min-width: ${responsive_sizes.tablet}) {
      font-size: ${font_sizes.extra_large};
    }
    font-weight: bold;
    font-family: sans-serif;
    padding: 12px;
  }
`;

export const SFeaturedCardWrapper = styled.div`
  margin: 12px 0 24px;
  display: grid;
  gap: 12px;
  grid-template-columns: 1fr;
  @media (min-width: ${responsive_sizes.tablet}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: ${responsive_sizes.desktop_small}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
