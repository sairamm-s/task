import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const ProtectedRoute = ({ component, ...rest }) => {
  var RenderComponents = component;
  let hasToken = localStorage.getItem('auth');
  return (
    <Route
      {...rest}
      render={(props) => {
        return hasToken !== null ? (
          <RenderComponents {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
            }}
          />
        );
      }}
    />
  );
};
