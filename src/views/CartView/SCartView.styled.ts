import styled from "styled-components";
import { font_sizes } from "@src/assets/styles/fonts/fonts";
import { bg_colors } from "@src/assets/styles/colors/colors";
import { responsive_sizes } from "@src/assets/resposive_sizes/responsive_sizes";

export const SCartView = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  min-height: 524px;
  @media (min-width: ${responsive_sizes.tablet}) {
    flex-direction: row;
    min-height: 400px;
  }
  gap: 24px;
  margin-bottom: 24px;
  .item-list-section {
    flex: 1;
    .list-header {
      display: grid;
      grid-template-columns: 5fr 3fr auto;
      padding: 16px 24px;
      background-color: ${bg_colors.primary_gray};
      border-radius: 12px;
      margin-bottom: 12px;
    }
    .clear-btn{
      margin-top: 32px;
    }
    .empty-cart {
      display: flex;
      background-color: ${bg_colors.primary_gray};
      align-items: center;
      justify-content: center;
      height: 300px;
      @media (min-width: ${responsive_sizes.tablet}) {
        height: 400px;
      }
      gap: 12px;
      border-radius: 12px;
    }
  }
  .summary-section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    @media (min-width: ${responsive_sizes.tablet}) {
      width: 30%;
    }
    height: 200px;
    padding: 16px;
    background-color: ${bg_colors.primary_gray};
    border-radius: 12px;
    flex-shrink: 1;
    .header {
      font-size: 20px;
      @media (min-width: ${responsive_sizes.tablet}) {
        font-size: ${font_sizes.extra_large};
      }
    }
    .content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .total-amount {
        display: flex;
        align-items: center;
      }
    }
  }
`;
