import type { FetchOptions } from "../types";
declare function fetchQuestions(options: FetchOptions): Promise<import("../types").QuestionObject[]>;
export { fetchQuestions };
