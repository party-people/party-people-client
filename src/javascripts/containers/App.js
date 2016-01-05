import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/partials/Header';
import Pickup from '../components/top/Pickup';
import CategoryList from '../components/top/CategoryList';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Pickup />
        <div id="wrapper" className="clearfix">
          <div id="main-content" className="clearfix">
            <CategoryList />
          </div>
          <div id="side-content">
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(App);
