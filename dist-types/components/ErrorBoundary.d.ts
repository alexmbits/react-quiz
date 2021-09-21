import * as React from "react";
declare class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    static getDerivedStateFromError(error: Error): {
        error: Error;
    };
    state: ErrorBoundaryState;
    reset: (...args: any[]) => void;
    render(): React.ReactNode;
}
declare type ErrorBoundaryState = {
    error: Error | null;
};
declare type ErrorBoundaryProps = {
    FallbackComponent: React.ComponentType<FallbackProps>;
    onReset: (...args: any[]) => void;
    children?: React.ReactNode;
};
export declare type FallbackProps = {
    error: Error;
    reset: () => void;
};
export default ErrorBoundary;
