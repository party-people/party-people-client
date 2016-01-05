import React, { Component } from 'react';

export default class Pickup extends Component {
  render() {
    const itemImage01Style = {
      'backgroundImage': 'url(http://content.mery.jp/1100x2000/images/1456000/gal-meets-glam-stuart-weitzman-gilligan7.jpg/original)'
    };
    const itemImage02Style = {
      'backgroundImage': 'url(http://content.mery.jp/1100x2000/images/1450564/large.png/original)'
    };
    const itemImage03Style = {
      'backgroundImage': 'url(https://scontent.cdninstagram.com/hphotos-xtf1/l/t51.2885-15/s640x640/sh0.08/e35/12299017_465367300314846_677587918_n.jpg)'
    };
    const avatarStyle = {
      'backgroundImage': 'url(http://dqaeric34olch.cloudfront.net/lists/193783/11351862_519618564846099_858988870_n.jpg/thumb?1451200977)'
    };
    return(
      <div id="pickup" classNameName="pickup">
        <div className="pickup__inner clearfix">
          <div className="pickup__main">
            <div className="pickup__item">
              <div className="item__image" style={itemImage01Style}></div>
              <div className="item__content">
                <div className="item__content__wrapper">
                  <div className="item__content__inner">
                    <h3 className="item__title">黒髪にしたのなら。ヒロイン級の”さらさら天使の輪”な美髪をなびかせましょ♡</h3>
                    <p className="item_description">黒髪にしました。でも、黒髪って重くてダメージが目立つような…なりたいのは漫画のヒロインのような天使の輪が光るさらさら髪。そんな美髪になるために毎日ヘアケアを行いましょう。大変なヘアケアではなく毎日のケアを...</p>
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
          </div>
          <div className="pickup__sub">
            <div className="pickup__sub01">
              <div className="pickup__item">
                <div className="item__image" style={itemImage02Style}></div>
                <div className="item__content">
                  <div className="item__content__wrapper">
                    <div className="item__content__inner">
                      <h3 className="item__title">黒髪にしたのなら。ヒロイン級の”さらさら天使の輪”な美髪をなびかせましょ♡</h3>
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
            </div>
            <div className="pickup__sub02">
              <div className="pickup__item">
                <div className="item__image" style={itemImage03Style}></div>
                <div className="item__content">
                  <div className="item__content__wrapper">
                    <div className="item__content__inner">
                      <h3 className="item__title">黒髪にしたのなら。ヒロイン級の”さらさら天使の輪”な美髪をなびかせましょ♡</h3>
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}