import React, { Component } from 'react';
import { connect } from 'react-redux';
import ui from 'redux-ui';
import managerSelector from '../selectors/managerSelectors.js';
import logo from '../logo.svg';
import '../App.css';

import Counter from '../components/Counter.jsx';

class App extends Component {
  render() {
    let { counterReducer } = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Counter counter={counterReducer}/>
      </div>
    );
  }
}

let AppUI = ui({ key: 'container', state: {}})(App);

export default connect(managerSelector)(AppUI);
