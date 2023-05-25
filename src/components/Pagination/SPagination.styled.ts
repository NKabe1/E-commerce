import styled from "styled-components";
import { colors, bg_colors } from "@src/assets/styles/colors/colors";
import { font_sizes } from "@src/assets/styles/fonts/fonts";

export const SPagination = styled.div`
  display: flex;
  justify-content: center;
  margin: 36px 0;
  font-size: ${font_sizes.medium};
  .pagination {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 6px;
  }
  .page-num {
    padding: 6px 12px;
    cursor: pointer;
    border-radius: 8px;
    font-weight: 400;
    border: 1px solid ${colors.light_text};
    &:hover {
      background-color: ${bg_colors.dropdown_light};
      color: black;
    }
  }
  .active {
    background-color: ${bg_colors.primary};
    color: ${colors.secondary};
  }
`;
