import styled from "styled-components";
import tw from "twin.macro";

export const SCategoryPageBreadcrump = styled.div`
  padding: 12px 0;
  & nav {
    ${tw`w-full rounded-md`}
    & ol {
      ${tw`[list-style-position: none] m-0 p-0 flex`}
      & li {
        .link {
          ${tw`text-gray-900 transition duration-150 ease-in-out hover:text-sky-600 focus:text-gray-600 active:text-gray-700`}
        }
        .divider{
            ${tw`mx-2 text-neutral-400`}
        }
      }
      .category{
        ${tw`text-neutral-400`}
      }
    }
  }
`;
