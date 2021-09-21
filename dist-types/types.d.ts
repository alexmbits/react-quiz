declare type QuestionObject = {
    question: string;
    category: string;
    type: string;
    difficulty: string;
    correct_answer: Answer;
    incorrect_answers: Answer[];
};
declare type Answer = "True" | "False";
declare type AnswersObject = {
    userAnswer: Answer;
    question: string;
    correctAnswer: Answer;
};
declare type FetchOptions = {
    type: string;
    difficulty: string;
    endpoint: string;
    amount: string;
    abortSignal?: AbortSignal;
};
declare type ValidQuizResponse = {
    response_code: 0;
    results: QuestionObject[];
};
export type { QuestionObject, Answer, AnswersObject, FetchOptions, ValidQuizResponse };
