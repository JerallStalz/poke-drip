import React from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import MenuSider from "./MenuSider";

export default function Container(props) {
  return (
    <div className="container">
      <Header />
      <MenuSider props={props} />
      <LoadRouters routes={props.routes} />
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
