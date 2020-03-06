import React from 'react';
import { Route, Redirect } from 'react-router-dom';


interface Routes {
  path: string
  exact?: boolean
  component: React.FC
  isPrivate: boolean
}

const RouteWrapper: React.FC<Routes> = ({ component, path, exact, isPrivate }) => {
  const signed = localStorage.getItem('token');

  if (!signed && isPrivate) {
    return <Redirect from="/" to={{ pathname: '/login' }} />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/todos" />;
  }

  return (
    <Route component={component} path={path} exact={exact} />
  );
};

export default RouteWrapper;