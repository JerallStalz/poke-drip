import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./config/routes";
import { Provider } from "react-redux";
import store from "./store";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
          {routes.map((route, index) => (
            <RouteWithSubRoutes key={index} {...route} />
          ))}
        </Switch>
      </Provider>
    </Router>
  );

  function RouteWithSubRoutes(route) {
    return (
      <Route
        path={route.path}
        exact={route.exact}
        render={(props) => <route.component routes={route.routes} {...props} />}
      />
    );
  }
}
