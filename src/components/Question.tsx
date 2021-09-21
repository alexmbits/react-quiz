import { unescape } from "he";

import Card from "./Card";
import Button from "./Button";

import type { Answer, QuestionObject } from "../types";

function Question({ category, question, handleClick }: QuestionProps) {
  return (
    <Card>
      <h2 className="heading">{category}</h2>
      <div className="main-text">
        <p>{unescape(question)}</p>
      </div>
      <div className="quiz-button-group">
        <Button onClick={() => handleClick("False")} color="red">
          False
        </Button>
        <Button onClick={() => handleClick("True")} color="green" cls="ml-8">
          True
        </Button>
      </div>
    </Card>
  );
}
type QuestionProps = { children?: React.ReactNode; handleClick: (answer: Answer) => void } & Pick<
  QuestionObject,
  "question" | "category"
>;

export default Question;
