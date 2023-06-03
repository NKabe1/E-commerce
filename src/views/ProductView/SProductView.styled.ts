import styled, { css } from "styled-components";
import { colors, bg_colors } from "@src/assets/styles/colors/colors";
import { font_sizes } from "@src/assets/styles/fonts/fonts";
import { responsive_sizes } from "@src/assets/resposive_sizes/responsive_sizes";

export const SProductView = styled.div`
  display: grid;
  grid-template-columns: auto;
  @media (min-width: ${responsive_sizes.desktop_small}) {
    grid-template-columns: 50% auto;
  }
  gap: 12px;
  margin: 24px 0;
  .image-section {
    display: flex;
    flex-direction: column;
    padding: 24px;
    gap: 12px;
    border-radius: 12px;
    background-color: ${bg_colors.primary_gray};
    .main-img {
      height: 180px;
      @media (min-width: ${responsive_sizes.tablet}) {
        height: 250px;
      }
      @media (min-width: ${responsive_sizes.desktop_medium}) {
        height: 280px;
      }
      @media (min-width: ${responsive_sizes.desktop_large}) {
        height: 300px;
      }
      @media (min-width: ${responsive_sizes.desktop_extra_large}) {
        height: 350px;
      }
      object-fit: contain;
    }
    .horizontal-imgs {
      display: flex;
      gap: 12px;
      width: 100%;
      overflow-x: auto;
      ::-webkit-scrollbar-track {
        background-color: ${bg_colors.dropdown_light};
      }
      ::-webkit-scrollbar-thumb {
        background-color: ${bg_colors.dropdown_dark};
        border-radius: 4px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background-color: ${bg_colors.primary};
      }
      ::-webkit-scrollbar {
        height: 10px;
      }
    }
  }
  .product-desc-section {
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    .title {
      font-size: ${font_sizes.extra_large};
      font-weight: bold;
    }
    .description {
      color: ${colors.dark_gray_text};
    }
    .price {
      display: flex;
      align-items: center;
      font-size: 24px;
      font-weight: bold;
    }
    .discount-section {
      display: flex;
      gap: 6px;
      .old-price {
        display: flex;
        align-items: center;
        font-weight: bold;
        text-decoration: line-through;
      }
      .discount-percentage {
        display: flex;
        align-items: center;
        color: red;
        .off-text {
          margin-left: 6px;
        }
      }
    }
    .quantity-info {
      display: flex;
      align-items: center;
      gap: 12px;
      .quantity-control {
        display: flex;
        align-items: center;
        .quantity-modify {
          padding: 0 12px;
        }
        .quantity {
          border-left: 1px solid ${colors.primary};
          border-right: 1px solid ${colors.primary};
          padding: 0 8px;
        }
      }
    }
    .stock-shortage {
      display: flex;
      gap: 6px;
      color: ${colors.dark_gray_text};
      .left-quantity {
        color: ${colors.warning};
        font-weight: 600;
      }
    }
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
    .btns-wrapper {
      display: flex;
      gap: 16px;
      margin: 12px 0;
    }
    .line {
      margin: 12px 0;
      border: 1px;
      height: 1px;
      opacity: 0.5;
      border-top: 1px solid ${colors.light_text};
      border-bottom: 1px solid ${colors.light_text};
    }
    .ps {
      display: flex;
      align-items: center;
      gap: 6px;
      color: ${colors.dark_gray_text};
      &_icon {
        color: ${colors.primary_green};
      }
    }
  }
`;

export const SSimilarProducts = styled.div`
  margin: 64px 0 32px;
`;

export const SSelectedImage = styled.img<{ isSelected: boolean }>`
  width: auto;
  height: 100px;
  cursor: pointer;
  border: 1px solid ${bg_colors.dropdown_light};
  border-radius: 6px;
  opacity: 0.6;
  &:hover {
    opacity: 1;
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      border: 1px solid ${bg_colors.primary};
      opacity: 1;
    `}
`;
