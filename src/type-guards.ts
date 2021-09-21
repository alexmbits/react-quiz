import { AnswersObject, QuestionObject, ValidQuizResponse } from "./types";

function assertIsTypedArray<T>(arg: any, check: (val: any) => val is T): asserts arg is T[] {
  if (!Array.isArray(arg)) throw new Error("Not an array.");
  if (arg.length === 0) throw new Error("Empty array.");
  if (arg.some((item) => !check(item))) throw new Error("Not a typed array.");
}

function isTypedArray<T>(arg: any, check: (val: any) => val is T): arg is T[] {
  if (!Array.isArray(arg) || arg.length === 0 || arg.some((item) => !check(item))) return false;

  return true;
}

function isQuestionObject(arg: any): arg is QuestionObject {
  return (
    typeof arg.category === "string" &&
    typeof arg.type === "string" &&
    typeof arg.difficulty === "string" &&
    typeof arg.question === "string" &&
    typeof arg.correct_answer === "string" &&
    Array.isArray(arg.incorrect_answers)
  );
}

function isAnswersObject(arg: any): arg is AnswersObject {
  return (
    typeof arg.question === "string" && typeof arg.userAnswer === "string" && typeof arg.correctAnswer === "string"
  );
}

function isValidQuizResponse(arg: any): arg is ValidQuizResponse {
  if (typeof arg !== "object" || arg == null || arg.response_code !== 0) return false;

  if (!isTypedArray(arg.results, isQuestionObject)) return false;

  return true;
}

export { isValidQuizResponse, isQuestionObject, assertIsTypedArray, isTypedArray, isAnswersObject };
