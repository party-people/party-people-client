import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import validateSignIn from './validateSignIn';
import Input from '../form/Input';
import FileInput from '../form/FileInput';

class SessionForm extends Component {
  render() {
    const {
      fields: { email, password },
      handleSubmit
    } = this.props;
    return(
      <form id="sign-up-form" className="session__form" onSubmit={handleSubmit}>
        <div className="form__wrapper">
          <header className="form__header">
            Sign In
          </header>
          <div className="form__inner">
            <div className="form__item">
              <label htmlFor="user-email">
                Email Adress
              </label>
              <Input id="user-email" field={email} placeholder="有効なメールアドレスを入力" />
            </div>
            <div className="form__item">
              <label htmlFor="user-password">
                Password
              </label>
              <Input id="user-password" type="password" field={password} placeholder="英数字6文字以上" />
            </div>
            <div className="form__submit">
              <input className="submit__button" type="submit" value="Login" />
              <p className="form__annotation">
                まだアカウントをお持ちでない方は<a href="/sign_up">新規登録</a>
              </p>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

SessionForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default reduxForm({
  form: 'session',
  fields: ['email', 'password'],
  validate: validateSignIn
})(SessionForm);
