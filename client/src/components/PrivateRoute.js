import React from 'react'
import {Route, Redirect} from 'react-router-dom'

// COPIED FROM AUTH WITH FRIENDS, REMEMBER TO MAYBE EDIT?

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("token") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );

export default PrivateRoute