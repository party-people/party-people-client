import React, { Component, PropTypes } from 'react';

export default class TimelineItem extends Component {
  render() {
    const { 
      article: {
        id, title, description, views
      } 
    } = this.props
    const itemImageStyle = {
      'backgroundImage': 'url(http://content.mery.jp/1100x2000/images/1450564/large.png/original)'
    };
    const avatarStyle = {
      'backgroundImage': 'url(http://dqaeric34olch.cloudfront.net/lists/193783/11351862_519618564846099_858988870_n.jpg/thumb?1451200977)'
    };
    return(
      <li className="timeline__item item">
        <a href={"/articles/" + id}>
          <div className="item__inner clearfix">
            <div className="item__image" style={itemImageStyle}></div>
            <div className="item__content">
              <h5 className="item__title">{title}</h5>
              <p className="item__description">{description}</p>
              <div className="item__info clearfix">
                <div className="item__contributor clearfix">
                  <div className="contributor__avator" style={avatarStyle}></div>
                  <p className="contributor__name">tsubasa_honda</p>
                </div>
                <p className="item__views">
                  <span className="views">{views}</span>view
                </p>
              </div>
            </div>
          </div>
        </a>
      </li>
    );
  }
}

TimelineItem.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    views: PropTypes.number.isRequired
  }).isRequired
}
