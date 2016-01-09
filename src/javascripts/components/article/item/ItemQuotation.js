import React, { Component, PropTypes } from 'react';

export default class ItemQuotation extends Component {
  render() {
    const { text, comment, source, sourceUrl } = this.props;
    return (
      <div className="article__item--quotation">
        <h4 className="quotation__text">{ text }</h4>
        <p className="quotation__link">出典：<a className="link" href={sourceUrl} target="_blank">{ source }</a></p>
        <blockquote className="quotation__comment">{ comment }</blockquote>
      </div>
    );
  }
}

ItemQuotation.propTypes = {
  text: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  sourceUrl: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired
}
