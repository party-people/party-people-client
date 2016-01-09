import React, { Component, PropTypes } from 'react';

export default class ItemHeadline extends Component {
  render() {
    const { title } = this.props;
    return (
      <h2 className="article__item--headline">{ title }</h2>
    );
  }
}

ItemHeadline.propTypes = {
  title: PropTypes.string.isRequired
}
