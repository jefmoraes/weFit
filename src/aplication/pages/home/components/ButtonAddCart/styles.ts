import styled, { ThemeProps } from "styled-components";

type ContainerProps = {
  selected: boolean;
};

export const Container = styled.button<ContainerProps>`
  display: flex;
  border-radius: 4px;
  width: 100%;
  background-color: ${({ selected, theme }) =>
    selected
      ? `${theme.colors.secondaryColorButton}`
      : `${theme.colors.primaryColorButton}`};

  align-items: center;
  justify-content: center;
  padding: 8px;
  gap: 12px;
  cursor: pointer;
`;

export const ContentIcon = styled.div`
  display: flex;
  gap: 3px;
`;

export const Text = styled.span`
  font-size: 12px;
  color: ${(props) => props.theme.colors.textPrimary};
  font-weight: 700;
  line-height: 16px;
`;
