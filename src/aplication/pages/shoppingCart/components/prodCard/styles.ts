import styled from "styled-components";

export const DesktopContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding-right: 8px;
  gap: 16px;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const ImageContainer = styled.div``;
export const Image = styled.img`
  width: 100%;
  max-width: 89px;
`;

export const HeaderProduct = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  @media (max-width: 600px) {
    flex-direction: row;
  }
  @media (min-width: 601px) {
    max-width: 253px;
  }
`;

export const Text = styled.span`
  color: ${(props) => props.theme.colors.textQuaternary};
  font-size: 14px;
  font-weight: 700;
  line-height: 19px;
  white-space: nowrap;
`;

export const Price = styled.span`
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.textQuaternary};
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  white-space: nowrap;
`;

export const TrashButton = styled.button`
  cursor: pointer;
`;

export const SubTotal = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 98px;
  align-items: flex-end;
`;

export const SubTotalText = styled.span`
  color: ${(props) => props.theme.colors.textTertiary};
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  white-space: nowrap;
`;

export const SubTotalPrice = styled.span`
  color: ${(props) => props.theme.colors.textQuaternary};
  font-size: 20;
  font-weight: 700;
  line-height: 22px;
  white-space: nowrap;
  max-width: 214px;
  @media (min-width: 601px) {
    width: 100%;
  }
`;

export const MobileContainer = styled.div`
  display: flex;
  gap: 16px;
  padding-right: 8px;
  @media (min-width: 601px) {
    display: none;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  flex-direction: column;
  gap: 16px;
`;

export const SubTotalQuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;
