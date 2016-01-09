import React, { Component } from 'react';

export default class EditorHeader extends Component {
  render() {
    return(
      <header id="editor-header">
        <div className="header__inner clearfix">
          <ul className="header__menu clearfix">
            <li className="menu__item">
              <button className="btn">下書き保存</button>
            </li>
            <li className="menu__item">
              <button className="btn">公開する</button>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
