declare class UnreachableError extends Error {
    constructor(_nvr: never, message: string);
}
export { UnreachableError };
