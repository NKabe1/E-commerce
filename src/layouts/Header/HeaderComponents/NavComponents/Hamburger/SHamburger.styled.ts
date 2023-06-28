import styled from "styled-components";
import { colors } from "@src/assets/styles/colors/colors";
import { bg_colors } from "@src/assets/styles/colors/colors";
import { font_sizes } from "@src/assets/styles/fonts/fonts";
import { responsive_sizes } from "@src/assets/resposive_sizes/responsive_sizes";

export const SHamburgerMenu = styled.div`
  .burger-bar {
    display: block;
    @media (min-width: ${responsive_sizes.desktop_small}) {
      display: none;
    }
  }

  .bm-burger-button {
    position: relative;
    width: 20px;
    height: 20px;
  }

  .bm-burger-bars {
    background: ${bg_colors.primary};
  }

  .bm-burger-bars-hover {
    background: ${colors.hover_w_lt_bg};
  }

  .bm-cross-button {
    height: 24px;
    width: 24px;
    margin: 12px;
  }

  .bm-cross {
    background: ${bg_colors.primary};
  }

  .bm-cross:hover {
    background: ${colors.hover_w_lt_bg};
  }

  .bm-menu-wrap {
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
  }

  .bm-menu {
    background: ${bg_colors.secondary};
    padding: 24px 24px;
    font-size: ${font_sizes.medium};
    box-shadow: 0 -2px 4px ${bg_colors.dropdown_dark};
  }

  .bm-item-list {
    padding: 12px;
    margin-top: 36px;
  }

  .bm-item {
    display: inline-block;
  }

  .bm-overlay {
    background: ${bg_colors.dropdown_dark};
    top: 0;
  }

  .title {
    position: fixed;
    font-size: ${font_sizes.extra_large};
    z-index: 10;
    background-color: white;
    display: block;
    top: 0;
    padding: 16px 0;
    width: 224px;
  }

  .list-item {
    margin-bottom: 8px;
    display: block;
    &:hover {
      color: ${colors.hover_w_lt_bg};
      transform: translateX(6px);
      transition: 0.2s ease-out;
    }
  }

  .line {
    height: 1px;
    background-color: ${colors.hover_text};
    margin: 4px 4px 0 0;
  }
`;
