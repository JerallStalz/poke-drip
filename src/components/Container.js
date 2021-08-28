import React from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import MenuSider from "./MenuSider";

export default function Container({ routes }) {
  return (
    <div className="container">
      <Header />
      <MenuSider />
      <LoadRouters routes={routes} />
      <Footer />
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
