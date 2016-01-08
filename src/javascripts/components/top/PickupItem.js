import React, { Component, PropTypes } from 'react';
import If from '../utilities/If';

export default class PickupItem extends Component {
  render() {
    const {
      index,
      article: { title, description, views }
    } = this.props;
    const itemImageStyle = {
      'backgroundImage': 'url(http://content.mery.jp/1100x2000/images/1456000/gal-meets-glam-stuart-weitzman-gilligan7.jpg/original)'
    };
    const avatarStyle = {
      'backgroundImage': 'url(http://dqaeric34olch.cloudfront.net/lists/193783/11351862_519618564846099_858988870_n.jpg/thumb?1451200977)'
    };
    return (
      <div className="pickup__item">
        <div className="item__image" style={itemImageStyle}></div>
        <div className="item__content">
          <div className="item__content__wrapper">
            <div className="item__content__inner">
              <h3 className="item__title">{ title }</h3>
              <If show={index == 0}>
                <p className="item_description">{ description }</p>
              </If>
              <div className="item__info clearfix">
                <div className="item__contributor clearfix">
                  <div className="contributor__avator" style={avatarStyle}></div>
                  <p className="contributor__name">tsubasa_honda</p>
                </div>
                <div className="item__views">
                  <span className="views">{ views }</span>view
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PickupItem.propTypes = {
  index: PropTypes.number.isRequired,
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    views: PropTypes.number.isRequired
  }).isRequired
}
