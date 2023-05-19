import styled from "styled-components";
import { responsive_sizes } from "@src/assets/resposive_sizes/responsive_sizes"; 

export const SMainContainer = styled.div`
  margin: auto;
  width: 85%;

  @media (min-width: ${responsive_sizes.tablet}) {
    width: 80%;
  }

  @media (min-width: ${responsive_sizes.desktop_large}) {
    width: 75%;
  }

  @media (min-width: ${responsive_sizes.desktop_extra_large}) {
    width: 65%;
  }
`;