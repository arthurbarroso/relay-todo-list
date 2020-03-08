import React from 'react';
import { Switch } from 'react-router-dom';
import RouteWrapper from './Route';

import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import TodoList from '../components/TodoList';
import CreateTodo from '../components/CreateTodo'
import TodoDetail from '../components/TodoDetail';
import TodoRefetch from '../components/TodoRefetch';


export default function () {


  return (
    <Switch>
      <RouteWrapper exact path="/" component={TodoRefetch} isPrivate={true} />
      <RouteWrapper path="/login" component={SignIn} isPrivate={false} />
      <RouteWrapper path="/signup" component={SignUp} isPrivate={false} />
      <RouteWrapper exact path="/todos" component={TodoRefetch} isPrivate={true} />
      <RouteWrapper path="/create" component={CreateTodo} isPrivate={true} />
      //@ts-ignore
      <RouteWrapper exact path="/todos/:id" component={TodoDetail} isPrivate={true} />
      <RouteWrapper exact path="/list" component={TodoList} isPrivate={true} />
    </Switch>
  )
}
