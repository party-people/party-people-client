import React, { Component } from 'react';
import If from '../utilities/If';

export default class PickupItem extends Component {
  render() {
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
              <h3 className="item__title">黒髪にしたのなら。ヒロイン級の”さらさら天使の輪”な美髪をなびかせましょ♡</h3>
              <If show={false}>
                <p className="item_description">黒髪にしました。でも、黒髪って重くてダメージが目立つような…なりたいのは漫画のヒロインのような天使の輪が光るさらさら髪。そんな美髪になるために毎日ヘアケアを行いましょう。大変なヘアケアではなく毎日のケアを...</p>
              </If>
              <div className="item__info clearfix">
                <div className="item__contributor clearfix">
                  <div className="contributor__avator" style={avatarStyle}></div>
                  <p className="contributor__name">tsubasa_honda</p>
                </div>
                <div className="item__views">
                  <span className="views">112345</span>view
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
