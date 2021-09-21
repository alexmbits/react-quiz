import * as React from "react";

const initialState: ErrorBoundaryState = { error: null };

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  state = initialState;

  reset = (...args: any[]) => {
    this.props.onReset(...args);
    this.setState(initialState);
  };

  render() {
    const { FallbackComponent } = this.props;
    const { error } = this.state;

    if (error !== null) {
      return <FallbackComponent error={error} reset={this.reset} />;
    }

    return this.props.children;
  }
}

type ErrorBoundaryState = { error: Error | null };
type ErrorBoundaryProps = {
  FallbackComponent: React.ComponentType<FallbackProps>;
  onReset: (...args: any[]) => void;
  children?: React.ReactNode;
};
export type FallbackProps = { error: Error; reset: () => void };

export default ErrorBoundary;
