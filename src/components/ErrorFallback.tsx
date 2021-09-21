import { Link } from "react-router-dom";

import type { FallbackProps } from "./ErrorBoundary";

function ErrorFallback({ error, reset }: FallbackProps) {
  return (
    <div className="min-h-screen pt-16 pb-12 flex flex-col bg-white">
      <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="text-center">
            <h1 role="alert" className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
              Sorry, something went wrong.
            </h1>
            <p className="mt-2 text-base text-gray-500">{error.message}</p>
            <div className="mt-6">
              <Link to="/" onClick={reset} className="text-base font-semibold text-cyan-600 hover:text-cyan-500">
                Go back home<span aria-hidden="true"> &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ErrorFallback;
