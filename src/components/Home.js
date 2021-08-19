import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import MenuSider from "./MenuSider";
export default function Home({ routes }) {
  return (
    <div className="home">
      <Header />
      <MenuSider />
      <LoadRouters routes={routes} />
    </div>
  );
}

function LoadRouters({ routes }) {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
}
