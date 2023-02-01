import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.theme.colors.secondary};
  padding: 10px 11px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
`;

export const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  gap: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  height: 188px;
`;

export const Title = styled.span`
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
`;

export const Price = styled.span`
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
`;
