import { AnswersObject, QuestionObject, ValidQuizResponse } from "./types";
declare function assertIsTypedArray<T>(arg: any, check: (val: any) => val is T): asserts arg is T[];
declare function isTypedArray<T>(arg: any, check: (val: any) => val is T): arg is T[];
declare function isQuestionObject(arg: any): arg is QuestionObject;
declare function isAnswersObject(arg: any): arg is AnswersObject;
declare function isValidQuizResponse(arg: any): arg is ValidQuizResponse;
export { isValidQuizResponse, isQuestionObject, assertIsTypedArray, isTypedArray, isAnswersObject };
