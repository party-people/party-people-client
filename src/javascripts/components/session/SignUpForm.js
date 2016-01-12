import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import validateSignUp from './validateSignUp';
import Input from '../form/Input';
import FileInput from '../form/FileInput';

class SignUpForm extends Component {
  render() {
    const {
      fields: { user_id, email, password, password_confirmation, avatar },
      handleSubmit
    } = this.props;
    return(
      <form id="sign-up-form" className="session__form" onSubmit={handleSubmit}>
        <div className="form__wrapper">
          <header className="form__header">
            Sign Up
          </header>
          <div className="form__inner">
            <div className="form__item">
              <label htmlFor="user-id">
                User ID
              </label>
              <Input id="user-id" field={user_id} placeholder="ユーザー名を入力" />
            </div>
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
            <div className="form__item">
              <label htmlFor="user-password-confirmation">
                Password Confirmation
              </label>
              <Input id="user-password-confirmation" type="password" field={password_confirmation} placeholder="もう一度パスワードを入力" />
            </div>
            <div className="form__item">
              <label htmlFor="user-avatar">
                Thumbnail Image
              </label>
              <FileInput id="user-avatar" field={avatar} />
            </div>
            <div className="form__submit">
              <input className="submit__button" type="submit" value="Create User" />
              <p className="form__annotation">
                すでにアカウントをお持ちの方は<a href="/sign_in">ログイン</a>
              </p>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

SignUpForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default reduxForm({
  form: 'session',
  fields: ['user_id', 'email', 'password', 'password_confirmation', 'avatar'],
  validate: validateSignUp
})(SignUpForm);
