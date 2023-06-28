import styled from "styled-components";
import tw from "twin.macro";

export const SUserView = styled.div`
  margin-bottom: 36px;
  min-height: 50vh;
  .wrapper {
    ${tw` flex h-full  flex-col items-center justify-center`}
    .img {
      ${tw`shrink-0 mb-12  md:mb-2 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12`}
    }
  }
`;