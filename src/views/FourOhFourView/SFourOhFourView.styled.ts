import styled from "styled-components";
import { responsive_sizes } from "@src/assets/resposive_sizes/responsive_sizes";

export const SFourOhFourView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  height: 100vh;
  .page-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    .img {
      height: 200px;
      @media (min-width: ${responsive_sizes.tablet}) {
        height: 300px;
      }
      @media (min-width: ${responsive_sizes.desktop_small}) {
        height: 360px;
      }
    }
    .info {
      margin: 12px 0;
      font-size: 20px;
      @media (min-width: ${responsive_sizes.tablet}) {
        font-size: 28px;
      }
      @media (min-width: ${responsive_sizes.desktop_small}) {
        font-size: 32px;
      }
    }
  }
  .btn {
    margin: 48px;
  }
`;
