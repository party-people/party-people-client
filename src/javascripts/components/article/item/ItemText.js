import React, { Component, PropTypes } from 'react';

export default class ItemText extends Component {
  render() {
    const { text } = this.props;
    return (
      <p className="article__item--text">{ text }</p>
    );
  }
}

ItemText.propTypes = {
  text: PropTypes.string.isRequired
}
