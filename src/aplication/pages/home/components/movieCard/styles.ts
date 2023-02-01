import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 10px 11px;
  display: flex;
  height: 100%;
  width: 100%;
  gap: 8px;
`;

export const MovieContainer = styled.div`
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
  gap: 7px;
`;

export const Content = styled.div`
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
  gap: 2px;
`;

export const Image = styled.img`
  height: 188px;
`;

export const Title = styled.span`
  color: ${(props) => props.theme.colors.textSecondary};
  line-height: 16px;
  font-weight: 700;
  font-size: 12px;
`;

export const Price = styled.span`
  color: ${(props) => props.theme.colors.textSecondary};
  line-height: 22px;
  font-weight: 700;
  font-size: 16px;
`;
