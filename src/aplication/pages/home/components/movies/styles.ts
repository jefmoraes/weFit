import styled from "styled-components";

export const Container = styled.main`
  display: grid;
  margin: auto;
  width: 100%;
  padding: 98px 16px;
  grid-template-columns: repeat(3, 1fr);
  max-width: 992px;
  align-items: center;
  justify-content: center;
  gap: 16px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 668px) {
    grid-template-columns: 1fr;
  }
`;
