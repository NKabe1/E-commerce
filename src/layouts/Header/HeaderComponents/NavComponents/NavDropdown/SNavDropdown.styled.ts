import styled from "styled-components";
import tw from "twin.macro";
import { bg_colors } from "@src/assets/styles/colors/colors";
import { responsive_sizes } from "@src/assets/resposive_sizes/responsive_sizes";

export const SNavDropdown = styled.nav`
  ${tw`relative`}
  & > div {
    & > button {
      ${tw`rounded-md px-4 py-2.5 text-center inline-flex items-center`}
      position: relative;
      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        height: 2px;
        width: 0;
        background-color: ${bg_colors.dropdown_dark};
        transition: width 0.3s ease-out;
      }
      &:hover::after {
        width: 100%;
      }
      & > svg {
        ${tw`w-4 h-4 ml-2`}
      }
    }
    & > div {
      ${tw`absolute bg-white shadow-md shadow-indigo-500/50 text-base z-50 list-none divide-y divide-gray-100 
      rounded-md overflow-y-auto w-44 max-h-80`}
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
        width: 10px;
      }
      & > ul {
        ${tw`py-2`}
        & > li {
          & > a {
            ${tw`text-sm hover:bg-gray-200 block px-4 py-2`}
          }
        }
      }
    }
  }
  display: none;
  @media (min-width: ${responsive_sizes.desktop_small}) {
    display: block;
  }
`;
