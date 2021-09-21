import { isValidQuizResponse } from "../type-guards";
import type { FetchOptions } from "../types";

async function fetchQuestions(options: FetchOptions) {
  const { endpoint, amount, difficulty, type, abortSignal } = options;

  const url = new URL(endpoint);
  const params = new URLSearchParams({ amount, difficulty, type });
  const response = await window.fetch(`${url}?${params}`, { signal: abortSignal });

  if (!response.ok) return Promise.reject(new Error("Error while loading questions."));

  const responseJSON = await response.json();

  if (isValidQuizResponse(responseJSON)) {
    return responseJSON.results;
  }
  return Promise.reject(new Error("Error while loading questions."));
}

export { fetchQuestions };
