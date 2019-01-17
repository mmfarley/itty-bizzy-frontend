import React, { Component } from 'react';
import { Router } from 'react-router-dom'
import { Switch, Route, Redirect } from 'react-router'
import history, { redirect } from './state/history'
import { Login } from './components/login'
import { NavBar } from './components/navbar'
import { Signup } from './components/signup'
import {UserDash} from './components/userdash'
import {Messages} from './components/messages'
import MyBizDash from './components/mybizdash'
import Invoices from './components/invoices'
import Welcome from './components/welcome'
import { connect } from 'react-redux'
import { PrivateRoute } from './components/privateroute'
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './components/theme'
import { setUser } from './state/actions/actions'


class App extends Component {

  componentWillMount(){
    if(localStorage.getItem("user")){
      this.props.setUser()
      redirect(history.location)
    }
  }

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



export default connect(null, { setUser })(App);