import React from 'react';
import { Switch, Route } from 'react-router-dom';
//import Route from './Route';

import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import TodoList from '../components/TodoList';


export default function () {


  return (
    <Switch>
      <Route exact path="/login">
        <SignIn />
      </Route>
      <Route exact path="/signup">
        <SignUp />
      </Route>
      <Route exact path="/todos">
        <TodoList />
      </Route>
    </Switch>
  )
}
