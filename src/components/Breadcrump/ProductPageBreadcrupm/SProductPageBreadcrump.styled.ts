import styled from "styled-components";
import tw from "twin.macro";

export const SProductPageBreadcrump = styled.div`
  padding: 12px 0;
  & nav {
    ${tw`w-full rounded-md`}
    & ol {
      ${tw`[list-style-position: none] m-0 p-0 flex`}
      & li {
        .link {
          ${tw`text-gray-900 transition duration-150 ease-in-out hover:text-sky-600 focus:text-gray-600 active:text-gray-700 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:text-gray-500 dark:active:text-gray-600`}
        }
        .divider {
          ${tw`mx-2 text-neutral-400 dark:text-neutral-400`}
        }
      }
      .current-page {
        ${tw`text-neutral-400 dark:text-neutral-400`}
      }
    }
  }
`;
