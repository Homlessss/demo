import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { RoutePaths } from "../constants";
import { connect } from "react-redux";
import { MainLayout } from "../layouts/MainLayout";

const Homepage = React.lazy(() => import("../pages/HomePage"));
const About = React.lazy(() => import("../pages/About"));

interface Props {}

const mapStateToProps = (state: any) => ({});

export const BaseRoutes = connect(mapStateToProps)(() => {
  return (
    <MainLayout>
      <Switch>
        <Route path={RoutePaths.MainLayout.About} component={About} />
        <Route path={RoutePaths.MainLayout.HomePage} component={Homepage} />
        <Redirect
          from={RoutePaths.Auth.ChooseUnit}
          exact
          to={RoutePaths.MainLayout.HomePage}
        />
        <Redirect to={RoutePaths.NotFound} />
      </Switch>
    </MainLayout>
  );
});
