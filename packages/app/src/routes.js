import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Todos from './components/Todos';
import Login from './components/Login';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Todos} exact path="/" />
        <Route component={Login} path="/auth" />
      </Switch>
    </BrowserRouter>
  )
}