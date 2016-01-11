import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { postUser } from '../actions/users';
import SessionForm from '../components/session/SessionForm';

class Session extends Component {
  handleSessionSubmit(data) {
    const formData = new FormData();
    for(const key in data) {
      const value = data[key];
      if (value) {
        if (value instanceof FileList) {
          if (value.length > 0) {
            formData.append(`user[${key}]`, data[key][0]);
          }
        }
        else {
          formData.append(`user[${key}]`, data[key]);
        }
      }
    }
    this.props.dispatch(postUser(formData));
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
