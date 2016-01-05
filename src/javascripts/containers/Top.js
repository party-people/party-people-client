import React, { Component } from 'react';
import Pickup from '../components/top/Pickup';
import CategoryList from '../components/top/CategoryList';
import Timeline from '../components/top/Timeline';
import Ranking from '../components/top/Ranking';

export default class Top extends Component {
  render() {
    return(
      <div id="top">
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
