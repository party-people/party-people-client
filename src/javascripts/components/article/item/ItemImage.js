import React, { Component, PropTypes } from 'react';

export default class ItemImage extends Component {
  render() {
    const { title, comment, imageUrl } = this.props;
    return (
      <div className="article__item--image clearfix">
        <div className="image__area">
          <img className="image__image" src={imageUrl} />
        </div>
        <div className="text__area">
          <h4 className="image__title">{ title }</h4>
          <p className="image__comment">{ comment }</p>
        </div>
      </div>
    );
  }
}

ItemImage.propTypes = {
  title: PropTypes.string.isRequired,
  comment: PropTypes.string,
  imageUrl: PropTypes.string.isRequired
}
