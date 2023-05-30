import styled from "styled-components";
import { colors, bg_colors } from "@src/assets/styles/colors/colors";
import { responsive_sizes } from "@src/assets/resposive_sizes/responsive_sizes";
import { font_sizes } from "@src/assets/styles/fonts/fonts";

export const SCartItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${bg_colors.primary_gray};
  border-radius: 12px;
  margin-bottom: 12px;
  padding: 12px;
  .cart-item {
    display: flex;
    flex-direction: row;
    gap: 12px;
    flex: 1;
    font-size: ${font_sizes.small};
    @media (min-width: ${responsive_sizes.tablet}) {
      font-size: ${font_sizes.large};
    }
    .part1 {
      display: flex;
      gap: 12px;
      align-items: center;
      .remove-icon {
        cursor: pointer;
      }
      .img {
        width: 48px;
        height: 36px;
        @media (min-width: ${responsive_sizes.tablet}) {
          width: 64px;
          height: 48px;
        }
      }
    }
    .part2 {
      flex: 1;
      .line2 {
        display: flex;
        justify-content: space-between;
        width: 100%;
        gap: 6px;
        @media (min-width: ${responsive_sizes.tablet}) {
          gap: 12px;
        }
        .quantity-section {
          display: flex;
          align-items: center;
          .change-quantity {
            padding: 0 6px;
            @media (min-width: ${responsive_sizes.tablet}) {
              padding: 0 12px;
            }
          }
          .quantity {
            border-left: 1px solid ${colors.primary};
            border-right: 1px solid ${colors.primary};
            padding: 0 8px;
          }
        }
        .price {
          display: flex;
          align-items: center;
        }
      }
    }
  }
`;
