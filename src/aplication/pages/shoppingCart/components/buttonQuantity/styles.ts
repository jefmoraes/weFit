import styled from "styled-components";

export const Content = styled.div`
  align-items: center;
  display: flex;
  gap: 11px;
`;

export const Button = styled.button`
  cursor: pointer;
`;

export const Quantity = styled.div`
  border: 1px solid ${(props) => props.theme.colors.borderPrimaryColor};
  color: ${(props) => props.theme.colors.textQuaternary};
  padding-right: 38px;
  padding-left: 16px;
  border-radius: 4px;
  line-height: 24pßx;
  font-size: 14px;
  max-width: 62px;
  width: 100%;
`;
