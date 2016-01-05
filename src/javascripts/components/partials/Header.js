import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header id="header" className="header">
        <div className="header__inner">
          <h1 className="header__logo">
            <a href="/">
              LOGO
            </a>
          </h1>
          <div className="header__search">
            <form className="search__form">
              <input className="search__input" type="text" placeholder="気になるワードを入力" />
              <div className="search__submit">
                <input className="search__button" type="submit" value="" />
                <i className="fa fa-search search__icon" />
              </div>
            </form>
          </div>
          <ul className="header__menu clearfix">
            <li className="header__item">
              <a href="/articles/new">まとめ作成</a>
            </li>
            <li className="header__item">
              <a href="/signup.html">会員登録</a>
            </li>
            <li className="header__item">
              <a href="#">ログイン</a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
