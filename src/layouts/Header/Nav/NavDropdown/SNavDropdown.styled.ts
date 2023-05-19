import styled from "styled-components";
import tw from "twin.macro";
import { bg_colors } from "@src/assets/styles/colors/colors";
import { responsive_sizes } from "@src/assets/resposive_sizes/responsive_sizes";

export const SNavDropdown = styled.nav`
  ${tw`relative rounded-md hover:shadow-md hover:shadow-indigo-500/50`}
  & > div {
    & > button {
      ${tw`rounded-md px-4 py-2.5 text-center inline-flex items-center`}
      & > svg {
        ${tw`w-4 h-4 ml-2`}
      }
    }
    & > div {
      ${tw`absolute mt-2 bg-white text-base z-50 list-none divide-y divide-gray-100 
      rounded-md shadow w-36 overflow-y-auto max-h-80`}
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
        ${tw`py-1`}
        & > li {
          & > a {
            ${tw`text-sm hover:bg-gray-200 block px-4 py-2`}
          }
        }
      }
    }
  }
  display: none;
  @media (min-width: ${responsive_sizes.tablet}) {
    display: block;
  }
`;
