import styled from "styled-components";
import tw from "twin.macro";

export const SCookieModal = styled.section`
  ${tw`fixed inset-x-8 max-w-2xl p-6 mx-auto bg-slate-800 opacity-95 border border-slate-700 md:gap-x-4 bottom-4 md:flex md:items-center rounded-xl`}
  .content {
    ${tw`flex items-center gap-x-4`}
    .icon {
      ${tw`inline-flex p-2 text-2xl text-blue-700 rounded-lg shrink-0 bg-blue-100/80`}
    }
    .info-text {
      ${tw`text-sm text-white`}
      .policy {
        ${tw`text-blue-400 hover:underline`}
      }
    }
  }
  .options-section {
    ${tw`flex items-center mt-6 gap-x-4 shrink-0 lg:mt-0`}
    .settings {
      ${tw`w-1/2 text-xs text-white underline transition-colors duration-200 md:w-auto  hover:text-blue-400 focus:outline-none`}
    }
    .ok {
      ${tw`text-xs w-1/2 md:w-auto font-medium bg-blue-500/70 rounded-lg hover:bg-blue-700/70 text-white px-4 py-2.5 duration-200 transition-colors focus:outline-none`}
    }
  }
`;
