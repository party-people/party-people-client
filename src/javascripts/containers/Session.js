import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { createFormData } from '../api/api';
import { postUser } from '../actions/users';
import SessionForm from '../components/session/SessionForm';

class Session extends Component {
  handleSessionSubmit(data) {
    this.props.dispatch(postUser(createFormData(data, 'user')));
  }

  render() {
    return(
      <div id="session">
        <div className="session__mask">
        </div>
        <div className="session__inner">
          <SessionForm onSubmit={this.handleSessionSubmit.bind(this)} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(Session);
