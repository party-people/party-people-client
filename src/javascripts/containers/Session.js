import React, { Component } from 'react';
import SessionForm from '../components/session/SessionForm';

export default class Session extends Component {
  render() {
    return(
      <div id="session">
        <div className="session__mask">
        </div>
        <div className="session__inner">
          <SessionForm />
        </div>
      </div>
    );
  }
}
