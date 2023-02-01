import styled from "styled-components";

type ContainerProps = {
  selected: boolean;
};

export const Container = styled.button<ContainerProps>`
  background-color: ${({ selected, theme }) =>
    selected
      ? `${theme.colors.secondaryColorButton}`
      : `${theme.colors.primaryColorButton}`};
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  padding: 8px;
  width: 100%;
  gap: 12px;
`;

export const ContentIcon = styled.div`
  display: flex;
  gap: 3px;
`;

export const Text = styled.span`
  color: ${(props) => props.theme.colors.textPrimary};
  line-height: 16px;
  font-weight: 700;
  font-size: 12px;
`;
