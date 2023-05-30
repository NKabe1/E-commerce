import styled from "styled-components";
import tw from "twin.macro";
import { bg_colors } from "@src/assets/styles/colors/colors";
import { responsive_sizes } from "@src/assets/resposive_sizes/responsive_sizes";

export const SCartModalWrapper = styled.div`
  ${tw`justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none`}
  .cart-modal {
    ${tw`relative  my-6  max-w-xl w-11/12`}
    @media (min-width: ${responsive_sizes.tablet}) {
      ${tw`relative  my-6  max-w-xl w-3/5`}
    }
    .modal-content {
      ${tw`border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none`}
      .header {
        ${tw`flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t`}
        .title {
          ${tw`text-3xl font-semibold`}
        }
        .button {
          ${tw`p-1 ml-auto bg-transparent border-0  float-right text-3xl leading-none font-semibold outline-none focus:outline-none`}
          .icon {
            ${tw`bg-transparent hover:bg-purple-200 h-6 w-6 text-2xl block outline-none focus:outline-none`}
          }
        }
      }
      .body {
        ${tw`relative p-6 flex-auto overflow-y-auto max-h-80`}
        &_content {
          ${tw`my-4 text-slate-900 text-base leading-relaxed`}
        }
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
      }
      .total-price {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 12px 48px;
        gap: 12px;
        .amount {
          display: flex;
          align-items: center;
        }
      }
      .footer-btn {
        ${tw`flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b`}
      }
    }
  }
`;

export const SModalOverlay = styled.div`
  ${tw`opacity-25 fixed inset-0 z-40 bg-black`}
`;
