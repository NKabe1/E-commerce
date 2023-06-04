import styled from "styled-components";
import { font_sizes } from "@src/assets/styles/fonts/fonts";
import { responsive_sizes } from "@src/assets/resposive_sizes/responsive_sizes";

export const SSectionTitle = styled.p`
  font-size: 20px;
  @media (min-width: ${responsive_sizes.tablet}) {
    font-size: ${font_sizes.extra_large};
  }
  font-weight: 600;
  padding: 8px 0;
`;
