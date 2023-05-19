import styled from "styled-components";
import tw from "twin.macro";

export const SSection = styled.section`
  ${tw`bg-gray-50 dark:bg-gray-900`}
  & > div {
    ${tw`flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0`}
    & > div {
      ${tw`w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700`}
      & > div {
        ${tw`p-6 space-y-4 md:space-y-6 sm:p-8`}
        & > h1 {
          ${tw`text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white`}
        }
      }
    }
  }
  .error-msg {
    ${tw`mt-2 text-sm text-red-600 dark:text-red-500`}
  }
  .terms-n-conditions {
    ${tw`flex items-start`}
    & > div {
      ${tw`flex items-center h-5`}
      & > input {
        ${tw`w-4 h-4 border border-gray-300 rounded bg-gray-50  focus:ring-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-gray-600 dark:ring-offset-gray-800`}
      }
    }
    .div-text {
      ${tw`ml-3 text-sm`}
      & > label {
        ${tw`font-light text-gray-500 dark:text-gray-300`}
        & > a {
          ${tw`font-medium text-gray-600 hover:underline dark:text-gray-500`}
        }
      }
    }
  }
  .success-msg {
    ${tw`mt-2 text-sm text-green-600 dark:text-green-500`}
  }
  .login {
    ${tw`text-sm font-light text-gray-500 dark:text-gray-400`}
    .link {
      ${tw`font-medium text-gray-600 hover:underline dark:text-gray-500`}
    }
  }
`;

export const SForm = styled.form`
  ${tw`space-y-4 md:space-y-6`}
  & > div {
    & > label {
      ${tw`block mb-2 text-sm font-medium text-gray-900 dark:text-white`}
    }
    & > input {
      ${tw`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
    }
  }
  & > button {
    ${tw`w-full text-black bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-100 dark:hover:bg-gray-200 dark:focus:ring-gray-800`}
  }
`;