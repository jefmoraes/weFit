import styled, { css } from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  flex-direction: column;
  border-radius: 4px;
  padding: 64px 0;
  display: flex;
  width: 100%;
`;

export const Content = styled.div`
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
  width: 100%;
  gap: 32px;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.textQuaternary};
  text-align: center;
  line-height: 27px;
  padding: 0 64px;
  font-size: 20px;
  display: flex;
`;

type ContainerImageProps = { type: "empty" | "success" };

export const ContainerImage = styled.div<ContainerImageProps>`
  ${({ type, theme }) =>
    type === "empty" &&
    css`
      border-bottom: 1px solid ${theme.colors.borderSecondaryColor};
    `};

  justify-content: center;
  align-items: center;
  max-width: 447px;
  display: flex;
  width: 100%;
`;

export const Image = styled.img<ContainerImageProps>`
  max-width: ${({ type }) => (type === "success" ? "294px" : "178")};
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primaryColorButton};
  color: ${(props) => props.theme.colors.textPrimary};
  text-align: center;
  padding: 11px 60px;
  border-radius: 4px;
  line-height: 19px;
  font-weight: 700;
  cursor: pointer;
  font-size: 14px;
`;
