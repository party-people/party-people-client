import React, { Component } from 'react';

export default class SessionForm extends Component {
  render() {
    return(
      <form id="sign-up-form">
        <div className="form__wrapper">
          <header className="form__header">
            Sign Up
          </header>
          <div className="form__inner">
            <div className="form__item">
              <label htmlFor="user-email">
                Email Adress
              </label>
              <input id="user-email" type="text" name="user[email]" placeholder="有効なメールアドレスを入力" />
            </div>
            <div className="form__item">
              <label htmlFor="user-password">
                Password
              </label>
              <input id="user-password" type="password" name="user[password]" placeholder="英数字8文字以上" />
            </div>
            <div className="form__item">
              <label htmlFor="user-password-confirmation">
                Password Confirmation
              </label>
              <input id="user-password-confirmation" type="password" name="user[password_confirmation]" placeholder="もう一度パスワードを入力" />
            </div>
            <div className="form__submit">
              <input className="submit__button" type="submit" value="Create User" />
              <p className="form__annotation">
                すでにアカウントをお持ちの方は<a href="#">ログイン</a>
              </p>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
