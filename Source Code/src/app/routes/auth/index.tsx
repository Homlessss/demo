import React from "react";
import { AuthLayout } from "../../layouts/AuthLayout";
import { Switch, Route, Redirect } from "react-router-dom";
import { RoutePaths } from "../../constants";
import Login from "../../pages/auth/Login";

export const AuthPages = () => {
  return (
    <AuthLayout>
      <Switch>
        <Route path={RoutePaths.Auth.Login} exact component={Login} />
        <Redirect
          from={RoutePaths.Auth.Index}
          exact={true}
          to={RoutePaths.Auth.Login}
        />
        <Redirect to={RoutePaths.Auth.Login} />
      </Switch>
    </AuthLayout>
  );
};
