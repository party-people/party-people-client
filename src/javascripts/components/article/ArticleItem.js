import React, { Component } from 'react';

export default class ArticleItem extends Component {
  render() {
    return (
      <div className="article__item">
        <div className="article__item__content">
          { this.props.children }
        </div>
      </div>
    );
  }
}
