import styled from "styled-components";
import tw from "twin.macro";
import { bg_colors } from "@src/assets/styles/colors/colors";

export const SButton = styled.button`
  ${tw`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800`}
  gap: 12px;
  background-color: ${bg_colors.primary};
  &:hover {
    background-color: ${bg_colors.hover_dark};
  }
`;
