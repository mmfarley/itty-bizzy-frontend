import React, { Component } from 'react';
import { Router } from 'react-router-dom'
import { Switch, Route, Redirect } from 'react-router'
import history, { redirect } from './state/history'
import { Login } from './components/login'
import { NavBar } from './components/navbar'
import { Signup } from './components/signup'
import {UserDash} from './components/userdash'
import {Messages} from './components/messages'
import BizDash from './components/bizdash'
import FindBiz from './components/findbiz'
import Welcome from './components/welcome'
import { PrivateRoute } from './components/privateroute'
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './components/theme'

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
                <PrivateRoute exact path="/biz-dash" component={BizDash} />
                <PrivateRoute exact path="/find-biz" component={FindBiz} />
              </Switch>
            </div>
          </MuiThemeProvider>
        </Router>
    );
  }
}



export default App;