import React, { Component, PropTypes } from 'react';

export default class CategoryList extends Component {
  render() {
    const { categories } = this.props;
    const categoryNodes = categories.map( (category) =>
      <li key={category.id} className="category__item">{category.title}</li>
    );
    return (
      <nav id="category">
        <ul className="category__list">
          <li className="category__item active">総合</li>
          { categoryNodes }
        </ul>
      </nav>
    );
  }
}

CategoryList.propTypes = {
  categories: PropTypes.array.isRequired
}
