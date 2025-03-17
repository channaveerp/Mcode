import { lazy } from "react";

const ROUTES = [
  {
    path: "/",
    exact: true,
    component: lazy(() => import("../pages/Home")),
    name: "HomePage",
    isPrivate: false,
  },
  {
    path: "/*",
    exact: false,
    component: lazy(() => import("../pages/ErrorPage404")),
    name: "ErrorPage",
    isPrivate: false,
  },
];

export default ROUTES;
