import React from 'react';
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router'


const _PrivateRoute = ({ component: Component, currentUser, ...rest }) => (
    <Route {...rest} render={(props) => (
        currentUser
            ? <Component {...props} />
            : <Redirect to='/login' />
    )} />
)

const mapStateToProps = (state) => ({
    currentUser: state.currentUser
})

export const PrivateRoute = connect(mapStateToProps)(_PrivateRoute)