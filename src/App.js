import React, { Component } from 'react';
import { Router } from 'react-router-dom'
import { Switch, Route, Redirect } from 'react-router'
import history from './state/history'
import { Login } from './components/login'
import { NavBar } from './components/navbar'
// import Signup from './components/signup'
import { Test } from './components/test'



class App extends Component {
  render() {
    return (
        <Router history={history}>
          <div>
            <NavBar />
            <Switch>
              {/* <Route path="/" component={Welcome} />} */}
              <Route path="/login" component={Login} />} />
              {/* <Route path="/signup" component={Signup} />} */}
              {/* <Route exact path="/userDash" />} /> */}
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
