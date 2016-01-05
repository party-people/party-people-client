import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/partials/Header';
import Pickup from '../components/top/Pickup';
import CategoryList from '../components/top/CategoryList';
import Timeline from '../components/top/Timeline';
import Ranking from '../components/top/Ranking';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Pickup />
        <div id="wrapper" className="clearfix">
          <div id="main-content" className="clearfix">
            <CategoryList />
            <Timeline />
          </div>
          <div id="side-content">
            <Ranking />
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(App);
