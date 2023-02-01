import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 64px 0;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 4px;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  gap: 32px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  display: flex;
  padding: 0 64px;
  color: ${(props) => props.theme.colors.textQuaternary};
  font-size: 20px;
  line-height: 27px;
  text-align: center;
`;

type ContainerImageProps = { type: "empty" | "success" };

export const ContainerImage = styled.div<ContainerImageProps>`
  ${({ type, theme }) =>
    type === "empty" &&
    css`
      border-bottom: 1px solid ${theme.colors.borderSecondaryColor};
    `};

  width: 100%;
  max-width: 447px;
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const Image = styled.img<ContainerImageProps>`
  max-width: ${({ type }) => (type === "success" ? "294px" : "178")};
`;

export const Button = styled.button`
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  font-weight: 700;
  background-color: ${(props) => props.theme.colors.primaryColorButton};
  color: ${(props) => props.theme.colors.textPrimary};
  padding: 11px 60px;
`;
