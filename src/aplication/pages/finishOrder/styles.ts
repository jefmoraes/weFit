import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const Main = styled.main`
  padding: 98px 16px;
  width: 100%;
  max-width: 982px;
  margin: 0 auto;
  @media (max-width: 600px) {
    padding-top: 68px;
    height: 100vh;
    padding-bottom: 16px;
  }
`;
