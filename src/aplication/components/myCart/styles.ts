import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  gap: 8px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
`;

export const ContentTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.span`
  color: ${(props) => props.theme.colors.textPrimary};
  font-size: 14px;
  font-weight: 600;
  line-height: 19px;
  @media (max-width: 376px) {
    display: none;
  }
`;

export const Subtext = styled.span`
  color: ${(props) => props.theme.colors.gray10};
  font-size: 12px;
  line-height: 16px;
  text-align: end;
`;
