import React, { Component } from 'react';

export default class TimelineItem extends Component {
  render() {
    const itemImageStyle = {
      'backgroundImage': 'url(http://content.mery.jp/1100x2000/images/1450564/large.png/original)'
    };
    const avatarStyle = {
      'backgroundImage': 'url(http://dqaeric34olch.cloudfront.net/lists/193783/11351862_519618564846099_858988870_n.jpg/thumb?1451200977)'
    };
    return(
      <li className="timeline__item item">
        <a href="/article.html">
          <div className="item__inner clearfix">
            <div className="item__image" style={itemImageStyle}></div>
            <div className="item__content">
              <h5 className="item__title">黒髪にしたのなら。ヒロイン級の”さらさら天使の輪”な美髪をなびかせましょ♡</h5>
              <p className="item__description">黒髪にしました。でも、黒髪って重くてダメージが目立つような...</p>
              <div className="item__info clearfix">
                <div className="item__contributor clearfix">
                  <div className="contributor__avator" style={avatarStyle}></div>
                  <p className="contributor__name">tsubasa_honda</p>
                </div>
                <p className="item__views">
                  <span className="views">12345</span>view
                </p>
              </div>
            </div>
          </div>
        </a>
      </li>
    );
  }
}
