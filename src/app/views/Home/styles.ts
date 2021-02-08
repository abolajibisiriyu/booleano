import styled from "@emotion/styled";

export const HomeContainer = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  p,
  h2 {
    text-align: center;
  }

  h2.title {
    margin: 30px 0;
  }

  p.description {
    margin-bottom: 30px;
  }

  .logo {
    width: 100px;
  }
`;
