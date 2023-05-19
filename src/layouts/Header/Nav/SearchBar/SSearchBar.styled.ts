import styled, { css } from "styled-components";
import { font_sizes } from "@src/assets/styles/fonts/fonts";
import { responsive_sizes } from "@src/assets/resposive_sizes/responsive_sizes";
import { colors } from "@src/assets/styles/colors/colors";

export const SSearchBar = styled.div`
  display: flex;
  align-items: center;
  & > div {
    position: relative;
    font-size: 20px;
    cursor: pointer;
    right: 16%;
    @media (min-width: ${responsive_sizes.tablet}) {
      right: 36px;
    }
    &.low-resolution {
      display: block;
      top: 6px;
      @media (min-width: ${responsive_sizes.tablet}) {
        display: none;
      }
    }
    &.high-resolution {
      display: none;
      @media (min-width: ${responsive_sizes.tablet}) {
        display: block;
      }
    }
  }
  .warning_text {
    display: none;
    @media (min-width: ${responsive_sizes.tablet}) {
      display: block;
      color: ${colors.warning};
      position: absolute;
      top: 36px;
      font-size: ${font_sizes.medium};
    }
  }
`;

type SSearchInputProps = {
  isInputValid: boolean;
};

export const SSearchInput = styled.input<SSearchInputProps>`
  padding: 8px;
  border: 1px solid
    ${({ isInputValid }) => {
      if (isInputValid) {
        return css`
          ${colors.light_text}
        `;
      } else {
        return css`
          ${colors.warning}
        `;
      }
    }};
  border-radius: 12px;

  &.high-resolution {
    display: none;
    @media (min-width: ${responsive_sizes.tablet}) {
      display: block;
      width: 240px;
    }

    @media (min-width: ${responsive_sizes.desktop_small}) {
      width: 400px;
    }

    @media (min-width: ${responsive_sizes.desktop_large}) {
      width: 500px;
    }

    @media (min-width: ${responsive_sizes.desktop_extra_large}) {
      width: 600px;
    }
  }
  &.low-resolution {
    margin: 12px auto auto;
    width: 80%;
    @media (min-width: ${responsive_sizes.tablet}) {
      display: none;
    }
  }
`;
