import React, { Component } from 'react';
import { Router } from 'react-router-dom'
import { Switch, Route, Redirect } from 'react-router'
import history from './state/history'
import { Login } from './components/login'
import { NavBar } from './components/navbar'
import { Signup } from './components/signup'
import {UserDash} from './components/userdash'
import {Messages} from './components/messages'
import MyBizDash from './components/mybizdash'
import Invoices from './components/invoices'
import Welcome from './components/welcome'
import { connect } from 'react-redux'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#009688' },
    secondary: { main: '#212121' }
  }
});

//component will mount check local storage for token, if token, send it to backend,

class App extends Component {
  render() {
    return (
        <Router history={history}>
          <MuiThemeProvider theme={theme}>
            <div>
              <NavBar />
              <Switch>
                <Route exact path="/" component={Welcome} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <PrivateRoute exact path="/user-dash" component={UserDash} />
                <PrivateRoute exact path="/messages" component={Messages} />
                <PrivateRoute exact path="/my-biz-dash" component={MyBizDash} />
                <PrivateRoute exact path="/invoices" component={Invoices} />
              </Switch>
            </div>
          </MuiThemeProvider>
        </Router>
    );
  }
}

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

const PrivateRoute = connect(mapStateToProps)(_PrivateRoute)

export default App;