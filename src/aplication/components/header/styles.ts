import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  width: 100%;
  height: 74px;
  position: fixed;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.primary};
  @media (max-width: 600px) {
    height: 68px;
  }
`;

export const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  flex: 1;
  max-width: 960px;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.textPrimary};
  font-size: 20px;
`;

export const ContentCard = styled.button`
  display: flex;
  gap: 8px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
`;

export const ContentTitleCard = styled.div`
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
