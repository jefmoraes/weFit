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
