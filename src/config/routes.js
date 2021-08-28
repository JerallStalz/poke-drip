import Container from "../components/Container";
import News from "../components/News";
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
        path: "/news",
        exact: true,
        component: News,
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
