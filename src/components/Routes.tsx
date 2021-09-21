import * as React from "react";
import { Route, Switch, useHistory } from "react-router-dom";

const Home = React.lazy(() => import("./Home"));
const ErrorBoundary = React.lazy(() => import("./ErrorBoundary"));
const ErrorFallback = React.lazy(() => import("./ErrorFallback"));
const Quiz = React.lazy(() => import("./Quiz"));
const Results = React.lazy(() => import("./Results"));
const NotFound = React.lazy(() => import("./NotFound"));

function Routes(_props: { children?: React.ReactNode }) {
  const history = useHistory();
  return (
    <ErrorBoundary onReset={() => history.push("/")} FallbackComponent={ErrorFallback}>
      <Switch>
        <Route path="/quiz">
          <Quiz />
        </Route>
        <Route path="/results">
          <Results />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </ErrorBoundary>
  );
}

export default Routes;
