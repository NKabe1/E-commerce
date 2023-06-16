import styled from "styled-components";
import tw from "twin.macro";
import { responsive_sizes } from "@src/assets/resposive_sizes/responsive_sizes";

export const SSearchBar = styled.div`
  & form {
    position: relative;
  }
  & input {
    ${tw`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-14`}
  }
  & button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    ${tw`flex items-center justify-center text-white bg-blue-900 hover:bg-purple-700 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-r-lg text-lg w-10 h-auto px-2 py-3 text-center`}
  }
  &.high-resolution {
    display: none;

    @media (min-width: ${responsive_sizes.desktop_small}) {
      display: block;
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
    @media (min-width: ${responsive_sizes.desktop_small}) {
      display: none;
    }
  }
`;