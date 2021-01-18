import React from "react";
import { Route, RouteProps, Redirect } from "react-router-dom";
import { Auth } from "../../services/auth";
import { RoutePaths } from "../../constants";
import { connect } from "react-redux";
import { User } from "../../models/User";

interface Props extends RouteProps {
  permission: string;
  user: User | null;
}

const mapStateToProps = (state: any) => ({
  user: state.auth.user,
});

export const AuthorizationRoute = connect(mapStateToProps)((props: Props) => {
  return (
    <>
      {props.user ? (
        Auth.hasPermission(props.permission) ? (
          <Route {...props} />
        ) : (
          <Redirect to={RoutePaths.AccessDenied} />
        )
      ) : (
        <Redirect to={RoutePaths.Auth.Login} />
      )}
    </>
  );
});
