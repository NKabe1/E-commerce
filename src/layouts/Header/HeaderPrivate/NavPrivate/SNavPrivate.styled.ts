import styled from "styled-components";
import { bg_colors, colors } from "@src/assets/styles/colors/colors";
import { font_sizes } from "@src/assets/styles/fonts/fonts";
import { responsive_sizes } from "@src/assets/resposive_sizes/responsive_sizes";

export const SNav = styled.nav`
  padding: 12px 0;
`;

export const SNavContent = styled.div`
  color: ${colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  .menu-logo {
    display: flex;
    align-items: center;
    gap: 12px;
    & > a {
      & > img {
        height: 50px;
        @media (min-width: ${responsive_sizes.tablet}) {
          height: 60px;
        }
      }
    }
  }

  .link_pair {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 24px;
    gap: 12px;
    @media (min-width: ${responsive_sizes.tablet}) {
      gap: 24px;
    }

    .link_to {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 12px;
      cursor: pointer;
      .cart-logo {
        display: flex;
        .quantity {
          font-size: ${font_sizes.small};
          font-weight: 700;
          position: relative;
          top: -12px;
          right: 12px;
          background-color: ${bg_colors.dropdown_light};
          border-radius: 50px;
          padding: 0 8px;
          margin-right: -22px;
        }
      }
      &:hover {
        color: ${colors.hover_w_lt_bg};
      }
      & > div {
        font-size: ${font_sizes.extra_large};
      }
      & > h4 {
        display: none;
        @media (min-width: ${responsive_sizes.tablet}) {
          display: block;
        }
      }
    }
  }
`;
