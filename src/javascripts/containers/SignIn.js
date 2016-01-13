import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { postOauthToken } from '../actions/users';
import SignInForm from '../components/session/SignInForm';

class SignIn extends Component {
  handleSessionSubmit(data) {
    data.grant_type = 'password'
    data.client_id = '3ac7d043d8bf1b90951d1e2d4af9d69e153d335783b9bda33da14ed49241d57a'
    data.client_secret = '1b0cb5dbc118518b438b64d6be1e2ef9099703a336f72cd352ec096d94554352'
    this.props.dispatch(postOauthToken(JSON.stringify(data)));
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

export default connect(mapStateToProps)(SignIn);
