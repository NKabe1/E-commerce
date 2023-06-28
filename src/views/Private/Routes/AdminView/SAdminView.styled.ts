import styled from "styled-components";
import tw from "twin.macro";

export const SAdminView = styled.div`
  ${tw`bg-gray-50`}
  .logout {
    display: flex;
    justify-content: flex-end;
  }
  .wrapper {
    ${tw`flex flex-col items-center justify-center px-6 py-8 mx-auto md:min-h-screen lg:py-0`}
    .content {
      ${tw`w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0`}
      .body {
        ${tw`p-6 space-y-4 md:space-y-6 sm:p-8`}
        .title {
          ${tw`text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl`}
        }
        .form {
          ${tw`space-y-4 md:space-y-6`}
          .label {
            ${tw`block mb-2 text-sm font-medium text-gray-900`}
          }
          .input {
            ${tw`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5`}
          }
          .btn {
            ${tw`w-full text-gray-800 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
          }
        }
      }
    }
  }
`;
