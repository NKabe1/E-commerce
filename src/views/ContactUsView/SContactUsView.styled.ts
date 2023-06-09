import styled from "styled-components";
import tw from "twin.macro";

export const SContactUsView = styled.section`
  ${tw`bg-white`}
  .main-div {
    ${tw`py-8 lg:py-12 px-4 mx-auto max-w-screen-md`}
    .title {
      ${tw`mb-4 text-2xl tracking-tight font-bold text-center text-gray-900`}
    }
    .sub-title {
      ${tw`mb-8 lg:mb-12 font-light text-center text-gray-500 sm:text-lg`}
    }
    .form {
      ${tw`space-y-8`}
      .form-section {
        .label {
          ${tw`block mb-2 text-sm font-medium text-gray-900`}
        }
        .input-email {
          ${tw`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
        }
        .input-subject {
          ${tw`block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500`}
        }
        .input-message {
          ${tw`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500`}
        }
      }
      .msg-section {
        ${tw`sm:col-span-2`}
      }
      .btn {
        ${tw`py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-900 hover:bg-purple-700 sm:w-fit focus:ring-4 focus:outline-none focus:ring-blue-300`}
      }
    }
  }
`;
