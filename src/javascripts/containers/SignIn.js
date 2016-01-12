import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { postUser } from '../actions/users';
import SignInForm from '../components/session/SignInForm';

class Session extends Component {
  handleSessionSubmit(data) {
    console.log(data);
  }

  render() {
    return(
      <div id="session">
        <div className="session__mask">
        </div>
        <div className="session__inner">
          <SignInForm onSubmit={this.handleSessionSubmit.bind(this)} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(Session);
