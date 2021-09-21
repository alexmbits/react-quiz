declare function useAsync<T>(initialState?: AsyncState<T>): {
    error: Error | null | undefined;
    setError: (error: Error) => void;
    status: "idle" | "pending" | "rejected" | "resolved";
    data: T | null | undefined;
    run: (promise: Promise<T>) => void;
};
declare type AsyncState<T> = {
    status: "idle";
    data?: null;
    error?: null;
} | {
    status: "pending";
    data?: null;
    error?: null;
} | {
    status: "resolved";
    data: T;
    error: null;
} | {
    status: "rejected";
    data: null;
    error: Error;
};
export { useAsync };
