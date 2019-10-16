import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";

import SignIn from "../pages/SignIn";
import SignIUp from "../pages/SignUp";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignIUp} />
      <Route path="/Dashboard" isPrivate component={Dashboard} />
      <Route path="/profile" component={Profile} />
    </Switch>
  );
}
