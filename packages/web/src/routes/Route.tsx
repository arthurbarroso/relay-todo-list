import React from 'react';

import { Route, Redirect } from 'react-router-dom';

import DefaultLayout from '../components/_layout';[


]
export default function RouteWrapper({
  //@ts-ignore
  component: Component,
  //@ts-ignore
  isPrivate,
  ...rest
}) {
  const signed = true;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/signup" />;
  }




  return (
    <Route
      {...rest}
      render={props => (
        <DefaultLayout>
          <Component {...props} />
        </DefaultLayout>
      )}
    />
  );
}
