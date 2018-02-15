import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from "./Home";
import AddLink from "./AddLink";
import Login from "./Login";
import LoginRequired from './LogInRequired';
export const HOME = '/';
export const LOGIN = '/login';
export const ADD_LINK = '/add-link';

export default () => (
  <Switch>
    <Route exact path={LOGIN} component={Login} />
    <LoginRequired exact path={HOME} component={Home} />
    <LoginRequired exact path={ADD_LINK} component={AddLink} />
  </Switch>
);
