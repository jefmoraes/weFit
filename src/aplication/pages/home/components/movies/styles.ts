import styled from "styled-components";

export const Container = styled.main`
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  padding: 98px 16px;
  max-width: 992px;
  display: grid;
  margin: auto;
  width: 100%;
  gap: 16px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 668px) {
    grid-template-columns: 1fr;
  }
`;
