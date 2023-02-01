import styled from "styled-components";

export const DesktopContainer = styled.div`
  justify-content: space-between;
  align-items: center;
  padding-right: 8px;
  display: flex;
  gap: 16px;
  flex: 1;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const ImageContainer = styled.div``;

export const Image = styled.img`
  max-width: 89px;
  width: 100%;
`;

export const HeaderProduct = styled.div`
  justify-content: space-between;
  flex-direction: column;
  display: flex;
  width: 100%;
  gap: 8px;

  @media (max-width: 600px) {
    flex-direction: row;
  }
  @media (min-width: 601px) {
    max-width: 253px;
  }
`;

export const Text = styled.span`
  color: ${(props) => props.theme.colors.textQuaternary};
  white-space: nowrap;
  line-height: 19px;
  font-weight: 700;
  font-size: 14px;
`;

export const Price = styled.span`
  color: ${(props) => props.theme.colors.textQuaternary};
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  line-height: 22px;
  font-weight: 700;
  font-size: 16px;
`;

export const TrashButton = styled.button`
  cursor: pointer;
`;

export const SubTotal = styled.div`
  flex-direction: column;
  align-items: flex-end;
  min-width: 98px;
  display: flex;
`;

export const SubTotalText = styled.span`
  color: ${(props) => props.theme.colors.textTertiary};
  white-space: nowrap;
  line-height: 16px;
  font-weight: 700;
  font-size: 12px;
`;

export const SubTotalPrice = styled.span`
  color: ${(props) => props.theme.colors.textQuaternary};
  white-space: nowrap;
  line-height: 22px;
  font-weight: 700;
  max-width: 214px;
  font-size: 20;

  @media (min-width: 601px) {
    width: 100%;
  }
`;

export const MobileContainer = styled.div`
  padding-right: 8px;
  display: flex;
  gap: 16px;

  @media (min-width: 601px) {
    display: none;
  }
`;

export const Content = styled.div`
  justify-content: center;
  flex-direction: column;
  display: flex;
  gap: 16px;
  flex: 1;
`;

export const SubTotalQuantityContainer = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
  gap: 16px;
`;
