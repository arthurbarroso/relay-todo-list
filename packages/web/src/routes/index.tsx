import React from 'react';
import { Switch } from 'react-router-dom';
import RouteWrapper from './Route';

import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import TodoList from '../components/TodoList';


export default function () {


  return (
    <Switch>
      <RouteWrapper path="/login" component={SignIn} isPrivate={false} />
      <RouteWrapper path="/signup" component={SignUp} isPrivate={false} />
      <RouteWrapper path="/todos" component={TodoList} isPrivate={true} />
    </Switch>
  )
}
