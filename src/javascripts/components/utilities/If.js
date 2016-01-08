import React, { Component } from 'react';

export default class If extends Component {
  render() {
    const { show, children } = this.props;
    if (show) {
      return children;
    } else {
      return false;
    }
  }
}
