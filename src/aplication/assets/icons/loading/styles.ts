import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0%{
    transform: rotate(0);
  }
  100%{
    transform: rotate(360deg);
  }

`;

export const Container = styled.div`
  display: flex;
  align-self: center;
`;

export const Content = styled.div`
  height: 64px;
  width: 64px;
  border-radius: 32px;
  border: 5px solid ${(props) => props.theme.colors.gray10};
  border-left: 5px solid ${(props) => props.theme.colors.iconPrimaryColor};
  opacity: 0.8;
  animation-name: ${rotate};
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
`;
