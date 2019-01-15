import React, { Component } from 'react';
import { Router } from 'react-router-dom'
import { Switch, Route, Redirect } from 'react-router'
import history from './state/history'
// import Login from './views/login'
// import NavBar from './views/navbar'
// import Signup from './views/signup'
import { Test } from './views/test'



class App extends Component {
  render() {
    return (
        <Router history={history}>
          <div>
            {/* <NavBar /> */}
            <Switch>
              <Route path="/" component={Test} />} />
              {/* <Route exact path="/signup" component={Signup} />} /> */}
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
