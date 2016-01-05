import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/partials/Header';

class App extends Component {
  render() {
    return (
      <div id="app">
        <Header />
        { this.props.children }
      </div>
    );
  }
}

export default connect()(App);
