import styled from "styled-components";
import { colors, bg_colors } from "@src/assets/styles/colors/colors";
import { font_sizes } from "@src/assets/styles/fonts/fonts";
import { responsive_sizes } from "@src/assets/resposive_sizes/responsive_sizes";

export const SHeaderTop = styled.div`
  background-color: ${bg_colors.primary};
  font-size: ${font_sizes.medium};
`;

export const SHeaderTopContent = styled.div`
  color: ${colors.secondary};
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  & > div {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  .additional {
    display: none;
    @media (min-width: ${responsive_sizes.tablet}) {
      display: block;
      display: flex;
    }
  }
  & > select {
    background-color: transparent;
    color: white;
    border: none;
    & > option {
      background-color: ${bg_colors.dropdown_light};
    }
  }
`;
