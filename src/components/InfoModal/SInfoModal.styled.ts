import styled from "styled-components";
import tw from "twin.macro";
import { responsive_sizes } from "@src/assets/resposive_sizes/responsive_sizes";

export const SInfoModal = styled.div`
  ${tw`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 p-4 overflow-x-hidden overflow-y-auto`}
  .modal-wrapper {
    ${tw`relative w-72 max-h-full`}
    @media (min-width: ${responsive_sizes.tablet}) {
      ${tw`relative w-96 max-h-full`}
    }
    .modal-window {
      ${tw`relative bg-slate-50 rounded-lg shadow drop-shadow-md`}
      .close-btn {
        ${tw`absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center`}
      }
      .content {
        ${tw`p-6 text-center flex-col`}
        .info-icon {
          ${tw`mx-auto mb-4 text-gray-400 w-12 h-12`}
          @media (min-width: ${responsive_sizes.tablet}) {
            ${tw`mx-auto mb-4 text-gray-400 w-14 h-14`}
          }
        }
        .info-text {
          ${tw`mb-5 font-normal text-gray-600`}
        }
        .ok-btn {
          ${tw`text-gray-700 bg-emerald-50 hover:bg-emerald-100 rounded-lg border border-emerald-100 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10`}
        }
      }
    }
  }
`;
