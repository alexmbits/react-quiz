/// <reference types="react" />
import type { Answer, QuestionObject } from "../types";
declare function Question({ category, question, handleClick }: QuestionProps): JSX.Element;
declare type QuestionProps = {
    children?: React.ReactNode;
    handleClick: (answer: Answer) => void;
} & Pick<QuestionObject, "question" | "category">;
export default Question;
