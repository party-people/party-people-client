import React, { Component, PropTypes } from 'react';

export default class ItemLink extends Component {
  render() {
    return (
      <div className="article__item--link">
        <h4 className="link__title"><a href={sourceUrl} target="_blank">{ title }</a></h4>
        <a className="link__url" href={sourceUrl} target="_blank">{ sourceUrl }</a>
        <p className="link__description">{ description }</p>
      </div>
    );
  }
}

ItemLink.propTypes = {
  title: PropTypes.string.isRequired,
  sourceUrl: PropTypes.string.isRequired,
  description: PropTypes.string
}
