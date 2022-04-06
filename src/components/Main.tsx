import styled from "styled-components";

export const Main = styled.main`
  box-sizing: border-box;
  padding: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  @media screen and (min-width: 1024px) {
    padding: 32px;
  }
`;