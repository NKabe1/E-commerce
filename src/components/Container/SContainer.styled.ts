import styled from "styled-components";
import { responsive_sizes } from "@src/assets/resposive_sizes/responsive_sizes";

export const SContainer = styled.div`
  display: grid;
  grid-template-columns:  auto;
  @media (min-width: ${responsive_sizes.tablet}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: ${responsive_sizes.desktop_small}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: ${responsive_sizes.desktop_large}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  gap: 12px;
  padding: 12px 0;
`;
