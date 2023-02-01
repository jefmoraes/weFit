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
  align-self: center;
  display: flex;
`;

export const Content = styled.div`
  border-left: 5px solid ${(props) => props.theme.colors.iconPrimaryColor};
  border: 5px solid ${(props) => props.theme.colors.gray10};
  animation-iteration-count: infinite;
  animation-name: ${rotate};
  animation-duration: 1.5s;
  border-radius: 32px;
  height: 64px;
  width: 64px;
  opacity: 0.8;
`;
