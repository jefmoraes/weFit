import styled from "styled-components";

export const Container = styled.button`
  justify-content: center;
  align-items: center;
  cursor: pointer;
  display: flex;
  gap: 8px;
`;

export const ContentTitle = styled.div`
  flex-direction: column;
  display: flex;
`;

export const Text = styled.span`
  color: ${(props) => props.theme.colors.textPrimary};
  line-height: 19px;
  font-weight: 600;
  font-size: 14px;

  @media (max-width: 376px) {
    display: none;
  }
`;

export const Subtext = styled.span`
  color: ${(props) => props.theme.colors.gray10};
  line-height: 16px;
  text-align: end;
  font-size: 12px;
`;
