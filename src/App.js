import React, { Suspense } from "react";
import routes from "./config/routes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


export default function App() {
  return (
    <>
      <Router>
        <Suspense fallback="...loading">
          {Object.keys(routes).map((routeKey) => (
            <Route Key={routeKey} {...routes[routeKey]} />
          ))}
        </Suspense>
      </Router>
    </>
  );
}
