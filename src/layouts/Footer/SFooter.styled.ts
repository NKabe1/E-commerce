import styled from "styled-components";

export const SFooter = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: rgb(0, 33, 115);
  color: white;
`;

export const SFooterTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 12px 0;
  align-items: center;

  & > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 12px;
    & > p {
      cursor: pointer;
      padding: 6px;
      &:hover {
        color: rgb(155 228 215);
      }
    }
  }
`;

export const SLine = styled.hr`
  border: 1px;
  height: 1px;
  border-top: 1px solid rgba(256, 256, 256, 0.5);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;

export const SFooterContent = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 16px;

  & > div {
    padding: 8px 0;

    & > p {
      margin-bottom: 10px;
      font-size: 16px;
      font-weight: bold;
    }

    & > div {
      display: flex;
      flex-direction: column;
      font-size: 14px;
      cursor: pointer;
      & > p {
        display: flex;
        flex-direction: row;
        gap: 10px;
        align-items: center;
        &:hover {
          transform: translateX(6px);
          transition: transform 0.2s ease-out;
          color: rgb(155 228 215);
        }
      }
    }
  }
`;

export const SFooterBottom = styled.div`
  display: flex;
  gap: 24px;
  padding: 8px 0;
  justify-content: center;
  font-size: 14px;
  & > p {
    cursor: pointer;
    &:hover {
      color: rgb(155 228 215);
    }
  }
`;