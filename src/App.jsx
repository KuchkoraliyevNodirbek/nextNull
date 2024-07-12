import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/main-layout";
import { routes, userRoutes } from "./routes/routes";
import UserLayout from "./layout/user-layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {routes.map(({ component: Element, id, path }) => (
          <Route key={id} path={path} element={<Element />} />
        ))}
        <Route path="profile" element={<UserLayout />}>
          {userRoutes.map(({ component: Element, id, path }) => (
            <Route key={id} path={path} element={<Element />} />
          ))}
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
