import React from 'react';
import { Route, Redirect } from 'react-router'


export const PrivateRoute = ({ component: Component, currentUser, ...rest }) => (
    <Route {...rest} render={(props) => (
        localStorage.getItem("token")
            ? <Component {...props} />
            : <Redirect to='/login' />
    )} />
)