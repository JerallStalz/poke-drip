import Container from "../components/Container";
import Pokedex from "../components/Pokedex";
import Main from "../components/Main";
import Error404 from "../components/Error404";
const routes = [
  {
    path: "/",
    exact: false,
    component: Container,
    routes: [
      {
        path: "/",
        exact: true,
        component: Main,
      },
      {
        path: "/pokedex",
        exact: true,
        component: Pokedex,
      },
      {
        component: Error404,
      },
    ],
  },
];

export default routes;
