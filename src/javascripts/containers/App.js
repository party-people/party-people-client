import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/partials/Header';
import Pickup from '../components/top/pickup';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Pickup />
      </div>
    );
  }
}

export default connect()(App);
