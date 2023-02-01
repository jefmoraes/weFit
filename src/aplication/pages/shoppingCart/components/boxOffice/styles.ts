import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  flex-direction: column;
  border-radius: 4px;
  padding: 24px;
  display: flex;
  gap: 21px;
  flex: 1;

  @media (max-width: 600px) {
    padding: 16px 8px 16px 16px;
    height: 100%;
  }
`;

export const ContentTitle = styled.div`
  justify-content: space-between;
  display: flex;
  width: 100%;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const Text = styled.div`
  color: ${(props) => props.theme.colors.textTertiary};
  line-height: 19px;
  text-align: start;
  font-weight: 700;
  max-width: 214px;
  font-size: 14px;
  width: 100%;
`;

export const QuantityText = styled.div`
  color: ${(props) => props.theme.colors.textTertiary};
  text-align: start;
  line-height: 19px;
  min-width: 120px;
  font-weight: 700;
  font-size: 14px;
`;

export const ProductText = styled.div`
  color: ${(props) => props.theme.colors.textTertiary};
  line-height: 19px;
  text-align: start;
  font-weight: 700;
  min-width: 89px;
  font-size: 14px;
`;

export const ProductsContainer = styled.div`
  flex-direction: column;
  overflow-y: auto;
  display: flex;
  gap: 16px;
  flex: 1;
`;

export const Line = styled.div`
  background-color: ${(props) => props.theme.colors.gray10};
  margin-right: 8px;
  height: 1px;
`;

export const TotalContainer = styled.div`
  width: 100%;
  display: flex;
  border-radius: 4px;
  justify-content: space-between;
  gap: 16px;
  padding-right: 8px;

  @media (max-width: 490px) {
    flex-direction: column-reverse;
  }
  @media (min-width: 491px) {
    align-items: center;
  }
`;

export const FinishOrder = styled.button`
  width: 100%;
  padding: 11px 0;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.colors.primaryColorButton};
  color: ${(props) => props.theme.colors.textPrimary};
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  line-height: 19px;

  @media (min-width: 491px) {
    max-width: 236px;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: center;
  gap: 26px;
  align-self: flex-end;
`;

export const TotalText = styled.span`
  color: ${(props) => props.theme.colors.textTertiary};
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  line-height: 19px;
`;

export const Price = styled.span`
  color: ${(props) => props.theme.colors.textQuaternary};
  white-space: nowrap;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  line-height: 33px;
`;
