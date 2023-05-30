import styled from "styled-components";
import tw from "twin.macro";
import { responsive_sizes } from "@src/assets/resposive_sizes/responsive_sizes";

export const SSuccessModal = styled.div`
  ${tw`border p-5 shadow-lg rounded-md bg-emerald-100/95 fixed inset-0 z-50`}
  height: 180px;
  width: 300px;
  top: calc(50% - 90px);
  left: calc(50% - 150px);
  @media (min-width: ${responsive_sizes.tablet}) {
    height: 200px;
    width: 400px;
    top: calc(50% - 100px);
    left: calc(50% - 200px);
  }
  .content {
    ${tw`mt-3 text-center`}
    .tick {
      ${tw`mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-emerald-300`}
      &_icon {
        ${tw`h-6 w-6 text-emerald-600`}
      }
    }
    .text-main {
      ${tw`text-lg leading-6 font-medium text-gray-900`}
    }
    .text-info {
      ${tw`mt-2 px-7 py-3`}
      .message {
        ${tw`text-sm text-gray-700`}
      }
    }
  }
`;
