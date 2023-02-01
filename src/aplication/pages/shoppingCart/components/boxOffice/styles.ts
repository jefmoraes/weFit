import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 21px;
  padding: 24px;
  flex: 1;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.secondary};

  @media (max-width: 600px) {
    padding: 16px 8px 16px 16px;

    height: 100%;
  }
`;

export const ContentTitle = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const Text = styled.div`
  max-width: 214px;
  width: 100%;
  color: ${(props) => props.theme.colors.textTertiary};
  font-size: 14px;
  font-weight: 700;
  text-align: start;
  line-height: 19px;
`;

export const QuantityText = styled.div`
  min-width: 120px;
  color: ${(props) => props.theme.colors.textTertiary};
  font-size: 14px;
  font-weight: 700;
  text-align: start;
  line-height: 19px;
`;

export const ProductText = styled.div`
  min-width: 89px;

  color: ${(props) => props.theme.colors.textTertiary};
  font-size: 14px;
  font-weight: 700;
  text-align: start;
  line-height: 19px;
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex: 1;
  gap: 16px;
  flex-direction: column;
  overflow-y: auto;
`;

export const Line = styled.div`
  height: 1px;
  background-color: ${(props) => props.theme.colors.gray10};
  margin-right: 8px;
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
