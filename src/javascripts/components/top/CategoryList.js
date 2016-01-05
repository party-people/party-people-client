import React, { Component } from 'react';

export default class CategoryList extends Component {
  render() {
    return(
      <nav id="category">
        <ul className="category__list">
          <li className="category__item active">総合</li>
          <li className="category__item">カテゴリー1</li>
          <li className="category__item">カテゴリー2</li>
          <li className="category__item">カテゴリー3</li>
          <li className="category__item">カテゴリー4</li>
          <li className="category__item">カテゴリー5</li>
          <li className="category__item">カテゴリー6</li>
        </ul>
      </nav>
    );
  }
}
