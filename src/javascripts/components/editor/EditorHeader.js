import React, { Component } from 'react';

export default class EditorHeader extends Component {
  render() {
    return(
      <header id="editor-header">
        <div className="header__inner clearfix">
          <ul className="header__menu clearfix">
            <li className="menu__item">
              <input className="btn" type="submit" value="下書き保存" />
            </li>
            <li className="menu__item">
              <input className="btn" type="submit" value="公開する" />
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
