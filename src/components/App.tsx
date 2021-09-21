import * as React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./Routes";
import Spinner from "./Spinner";

function App() {
  return (
    <React.Suspense fallback={<Spinner />}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </React.Suspense>
  );
}

export default App;
