import styled from "styled-components";
import { font_sizes } from "@src/assets/styles/fonts/fonts";
import { responsive_sizes } from "@src/assets/resposive_sizes/responsive_sizes";
import { colors } from "@src/assets/styles/colors/colors";

export const SNotification = styled.p<{ mode: "positive" | "negative" }>`
  font-size: ${font_sizes.large};
  color: ${({ mode }) =>
    mode === "positive" ? colors.dark_gray_text : colors.warning};
`;

export const SNoProducts = styled.div`
  height: 548px;
  @media (min-width: ${responsive_sizes.tablet}) {
    height: 424px;
  }
`;
