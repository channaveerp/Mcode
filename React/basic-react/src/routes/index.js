import { Navigate, Route, Routes } from "react-router-dom";

import ROUTES from "./routes";
import { Suspense } from "react";

function PrivateRoute(props) {
  const { children, isAuthenticated } = props;
  return isAuthenticated ? children : <Navigate to='/login' />;
}

function PublicRoute(props) {
  const { children, isAuthenticated } = props;
  return isAuthenticated ? <Navigate to='/' /> : children;
}

function AppRoutes() {
  const { isLoggedIn } = true;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {ROUTES.map((route) =>
          route.isPrivate ? (
            <Route
              key={route.name}
              path={route.path}
              element={
                <PrivateRoute isAuthenticated={isLoggedIn}>
                  <route.component />
                </PrivateRoute>
              }
            />
          ) : (
            <Route
              key={route.name}
              path={route.path}
              element={
                route.exact ? (
                  <PublicRoute isAuthenticated={isLoggedIn}>
                    <route.component />
                  </PublicRoute>
                ) : (
                  <route.component />
                )
              }
            />
          )
        )}
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
