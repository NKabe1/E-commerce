import styled from "styled-components";
import { colors } from "@src/assets/styles/colors/colors";
import { bg_colors } from "@src/assets/styles/colors/colors";
import { responsive_sizes } from "@src/assets/resposive_sizes/responsive_sizes";
import { font_sizes } from "@src/assets/styles/fonts/fonts";

export const SFooter = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: ${bg_colors.primary};
  color: ${colors.secondary};
`;

export const SFooterTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 12px 0;
  align-items: center;

  & > h4 {
    display: none;
    @media (min-width: ${responsive_sizes.tablet}) {
      display: block;
    }
  }

  & > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 12px;
    & > p {
      cursor: pointer;
      padding: 6px;
      &:hover {
        color: ${colors.hover_text};
      }
    }
  }
`;

export const SLine = styled.hr`
  border: 1px;
  height: 1px;
  border-top: 1px solid rgba(256, 256, 256, 0.5);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;

export const SFooterContent = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 16px;

  @media (min-width: ${responsive_sizes.tablet}) {
    grid-template-columns: auto auto auto;
    gap: 8px;
  }

  & > div {
    padding: 8px 0;

    & > p {
      margin-bottom: 10px;
      font-size: ${font_sizes.large};
      font-weight: bold;
    }

    & > div {
      display: flex;
      flex-direction: column;
      font-size: ${font_sizes.medium};
      cursor: pointer;
      & > p {
        display: flex;
        flex-direction: row;
        gap: 10px;
        align-items: center;
        &:hover {
          transform: translateX(6px);
          transition: transform 0.2s ease-out;
          color: ${colors.hover_text};
        }
        & .link {
          display: flex;
          gap: 10px;
          align-items: center;
        }
      }
    }
  }
`;

export const SFooterBottom = styled.div`
  display: flex;
  padding: 8px 0;
  justify-content: center;
  align-items: center;
  font-size: ${font_sizes.medium};
  flex-direction: column;
  gap: 8px;
  .terms-n-policy {
    display: flex;
    gap: 24px;
    &_item {
      cursor: pointer;
      &:hover {
        color: rgb(155 228 215);
      }
    }
  }
`;
