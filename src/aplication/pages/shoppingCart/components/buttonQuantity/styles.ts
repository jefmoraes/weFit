import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  gap: 11px;
  align-items: center;
`;

export const Button = styled.button`
  cursor: pointer;
`;

export const Quantity = styled.div`
  width: 100%;
  max-width: 62px;
  padding-left: 16px;
  padding-right: 38px;
  border: 1px solid ${(props) => props.theme.colors.borderPrimaryColor};
  border-radius: 4px;
  color: ${(props) => props.theme.colors.textQuaternary};
  font-size: 14px;
  line-height: 24px;
`;
