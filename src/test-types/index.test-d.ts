import { expectNotAssignable, expectAssignable } from "tsd";
import { ValidQuizResponse } from ".";

expectNotAssignable<ValidQuizResponse>({
  response_code: 1,
  results: [
    {
      category: "Entertainment: Video Games",
      type: "boolean",
      question: "Unturned originally started as a Roblox game.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
  ],
});
expectAssignable<ValidQuizResponse>({
  response_code: 0,
  results: [
    {
      category: "Entertainment: Video Games",
      type: "boolean",
      difficulty: "hard",
      question: "Unturned originally started as a Roblox game.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
  ],
});
