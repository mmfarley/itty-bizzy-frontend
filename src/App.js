import React, { Component } from 'react';
import SectionLogin from './login.js'
import { Provider } from 'react-redux'
import store from './store.js'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <h1>Welcome to Itty Bizzy</h1>
          <SectionLogin />
        </div>
     </Provider >
    );
  }
}

export default App;
