import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTop } from '../actions/top';
import Pickup from '../components/top/Pickup';
import CategoryList from '../components/top/CategoryList';
import Timeline from '../components/top/Timeline';
import Ranking from '../components/top/Ranking';

class Top extends Component {
  componentDidMount() {
    this.props.dispatch(fetchTop());
  }
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

function mapStateToProps(state) {
  return { state };
}

export default connect(mapStateToProps)(Top);
