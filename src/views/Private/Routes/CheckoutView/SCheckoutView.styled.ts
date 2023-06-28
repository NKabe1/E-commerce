import styled from "styled-components";
import tw from "twin.macro";

export const SCheckoutView = styled.div`
  ${tw`min-h-screen bg-gray-50 flex items-center justify-center px-1 pb-20 pt-20`}
  .checkout-wrapper {
    ${tw`mt-10 bg-white px-4 pt-6 rounded-lg lg:mt-0`}
    .logo-div {
      ${tw`w-full pt-1 pb-5`}
      .logo-wrapper {
        ${tw`bg-blue-900 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center`}
        .logo {
          ${tw`text-3xl`}
        }
      }
    }
  }
  .header {
    ${tw`mb-6`}
    .title {
      ${tw`text-center font-bold text-xl pb-2`}
    }
    .sub-title {
      ${tw`text-center text-gray-400`}
    }
  }
  .img-div {
    ${tw`flex mb-6 items-center justify-center`}
    .img {
      ${tw`h-8`}
    }
  }
  .label {
    ${tw`mt-4 mb-2 block text-sm font-medium`}
  }
  .input-common {
    ${tw`rounded-md border border-gray-200 px-1 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500`}
  }
  .input-w-icon {
    ${tw`w-full pl-10`}
  }
  .input-cvc {
    ${tw`w-1/6 flex-shrink-0`}
  }
  .input-icon {
    ${tw`pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3`}
  }
  .btn {
    ${tw`py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-900 hover:bg-purple-700 sm:w-fit focus:ring-4 focus:outline-none focus:ring-blue-300`}
  }
`;
