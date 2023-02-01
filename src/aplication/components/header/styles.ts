import styled from "styled-components";

export const Container = styled.header`
  background-color: ${(props) => props.theme.colors.primary};
  justify-content: center;
  align-items: center;
  position: fixed;
  display: flex;
  height: 74px;
  width: 100%;
  @media (max-width: 600px) {
    height: 68px;
  }
`;

export const ContentHeader = styled.div`
  justify-content: space-between;
  align-items: center;
  max-width: 960px;
  padding: 0 10px;
  display: flex;
  flex: 1;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.textPrimary};
  font-size: 20px;
`;
