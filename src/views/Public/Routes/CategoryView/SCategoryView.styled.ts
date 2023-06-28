import styled from "styled-components";
import { colors } from "@src/assets/styles/colors/colors";

export const SCategoryView = styled.div`
  margin-bottom: 24px;
`;

export const SCategoryTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  .in-stock {
    display: flex;
    align-items: center;
    gap: 6px;
    color: ${colors.dark_gray_text};
    &_icon {
      color: ${colors.primary_green};
      font-size: 20px;
    }
  }
`;
