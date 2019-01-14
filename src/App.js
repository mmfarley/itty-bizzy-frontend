import React, { Component } from 'react';
import { Router } from 'react-router-dom'
import { Switch, Route, Redirect } from 'react-router'
import history from './state/history'
import login from './views/login'


class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" component={login} />} />
        </Switch>
      </Router>
    );
  }
}

export default App;
