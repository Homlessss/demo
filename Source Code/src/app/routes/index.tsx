import * as React from "react";
import {
  BrowserRouter as Router,
  Switch,
  // Route,
  // Redirect,
} from "react-router-dom";
// import { AuthPages } from "./auth";
import { BaseRoutes } from "./routes";
// import { RoutePaths } from "../constants";
import { connect } from "react-redux";
import { fetchUser } from "../redux/modules/auth";
import { User } from "../models/User";

interface RoutesProps {
  basename: string;
  fetchUser: () => void;
  user: User | null;
}

// const NotFound = React.lazy(() => import("../pages/NotFound"));
// const AccessDenied = React.lazy(() => import("../pages/AccessDenied"));

const mapStateToProps = (state: any) => ({
  user: state.auth.user,
});

const mapDispatchToProps = {
  fetchUser,
};

export const Routes = connect(
  mapStateToProps,
  mapDispatchToProps
)(({ basename, fetchUser, user }: RoutesProps) => {
  React.useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <>
      <Router basename={basename}>
        <Switch>
          {/* {!user ? (
            <AuthPages />
          ) : (
            <Redirect
              from={RoutePaths.Auth.Index}
              to={RoutePaths.Homepage.Index}
            />
          )}

          <Route path={RoutePaths.NotFound} component={NotFound} />
          <Route path={RoutePaths.AccessDenied} component={AccessDenied} />

          {!user ? (
            <>
              <Redirect to={RoutePaths.Auth.Login} />
            </>
          ) : (
            )} */}
          <BaseRoutes />
        </Switch>
      </Router>
    </>
  );
});
