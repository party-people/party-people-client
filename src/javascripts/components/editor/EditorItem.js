import React, { Component } from 'react';

export default class EditorItem extends Component {
  render() {
    return (
      <div className="article__item article__item--draft">
        <div className="article__item__control">
          <div className="control__inner">
            <a className="control__item control--up"><i className="fa fa-angle-up" /></a>
            <a className="control__item control--top"><i className="fa fa-angle-double-up" /></a>
            <a className="control__item control--down"><i className="fa fa-angle-down" /></a>
            <a className="control__item control--bottom"><i className="fa fa-angle-double-down" /></a>
          </div>
        </div>
        <div className="article__item__content">
          { this.props.children }
        </div>
        <div className="article__item__edit">
          <p className="edit__inner">
            <a><i className="fa fa-edit"></i>編集</a>
            <span className="line">|</span>
            <a><i className="fa fa-trash"></i>削除</a>
          </p>
        </div>
      </div>
    );
  }
}
