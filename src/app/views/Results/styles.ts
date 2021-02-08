import styled from "@emotion/styled";

export const ResultsContainer = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  & > p {
    text-align: center;
  }

  .score {
    margin: 20px 0 10px;
    span {
      font-size: 3rem;
    }
  }

  button {
    flex-shrink: 0;
    margin-top: 10px;
  }
`;
