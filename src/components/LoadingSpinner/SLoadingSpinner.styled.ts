import styled from "styled-components";
import tw from "twin.macro";

export const SLoadingSpinner = styled.div`
  ${tw`min-h-screen flex flex-col bg-white`}
  .wrapper-div {
    ${tw`flex flex-auto flex-col justify-center items-center p-4 md:p-5`}
    .spinner {
      ${tw`animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full`}
    }
  }
`;
