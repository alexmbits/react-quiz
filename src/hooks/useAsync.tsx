import * as React from "react";

function useAsync<T>(initialState?: AsyncState<T>) {
  const [state, dispatch] = React.useReducer<React.Reducer<AsyncState<T>, AsyncAction<T>>>(asyncReducer, {
    status: "idle",
    data: null,
    error: null,
    ...initialState,
  });

  const { data, error, status } = state;

  const run = React.useCallback((promise: Promise<T>) => {
    dispatch({ type: "pending" });
    promise.then(
      (data: T) => {
        dispatch({ type: "resolved", data });
      },
      (error: Error) => {
        dispatch({ type: "rejected", error });
      }
    );
  }, []);

  const setError = React.useCallback((error: Error) => dispatch({ type: "rejected", error }), []);

  return {
    error,
    setError,
    status,
    data,
    run,
  };
}

function asyncReducer<T>(_state: AsyncState<T>, action: AsyncAction<T>): AsyncState<T> {
  if (action.type === "pending") {
    return { status: "pending", data: null, error: null };
  }
  if (action.type === "resolved") {
    return { status: "resolved", data: action.data, error: null };
  }
  if (action.type === "rejected") {
    return { status: "rejected", data: null, error: action.error };
  }

  throw new Error(`Unhandled action: ${JSON.stringify(action)}`);
}

type AsyncState<T> =
  | {
      status: "idle";
      data?: null;
      error?: null;
    }
  | {
      status: "pending";
      data?: null;
      error?: null;
    }
  | {
      status: "resolved";
      data: T;
      error: null;
    }
  | {
      status: "rejected";
      data: null;
      error: Error;
    };

type AsyncAction<T> = { type: "pending" } | { type: "resolved"; data: T } | { type: "rejected"; error: Error };

export { useAsync };
