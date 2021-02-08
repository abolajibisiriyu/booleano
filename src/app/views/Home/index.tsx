import Button from "app/styles/elements/Button";
import H2 from "app/styles/elements/H2";
import P from "app/styles/elements/P";
import useQuestions from "./hooks/useQuestions";
import { HomeContainer } from "./styles";

export default function Home() {
  const { fetchQuestions, isFetching } = useQuestions();

  return (
    <HomeContainer>
      <P>Welcome to</P>
      <img
        src="https://res.cloudinary.com/abolajibisiriyu/image/upload/v1606597590/suguni/conifer-75.png"
        alt="icon"
        className="logo"
      />
      <H2 className="title" huge>
        Booleano
      </H2>
      <P className="description">
        You are to answer 10 True or False questions
      </P>
      <P className="description">Can you score 100%?</P>
      <Button variant="blue" onClick={fetchQuestions}>
        {isFetching ? "Setting up game..." : "BEGIN"}
      </Button>
    </HomeContainer>
  );
}
