import styled from "styled-components";
import { colors } from "@src/assets/styles/colors/colors";

export const SEmptyCartMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  .icon {
    font-size: 40px;
    background-color: ${colors.warning};
    color: ${colors.secondary};
    padding: 16px;
    border-radius: 50%;
  }
`;
