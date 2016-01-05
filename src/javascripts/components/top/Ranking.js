import React, { Component } from 'react';
import RankingHeader from './RankingHeader';

export default class Ranking extends Component {
  render() {
    const itemImageStyle = {
      'backgroundImage': 'url(http://content.mery.jp/1100x2000/images/1450564/large.png/original)'
    };
    return(
      <div className="side__content">
        <RankingHeader />
        <ul className="side__content__items">
          <li className="item list__item">
            <div className="item__inner clearfix">
              <div className="item__image" style={itemImageStyle}></div>
              <div className="item__content">
                 <h5 className="item__title">黒髪にしたのなら。ヒロイン級の”さらさら天使の輪”な...</h5>
                  <div className="item__contributor">
                    <p className="contributor__name">tsubasa_honda</p>
                  </div>
              </div>
            </div>
          </li>
          <li className="item list__item">
            <div className="item__inner clearfix">
              <div className="item__image" style={itemImageStyle}></div>
              <div className="item__content">
                 <h5 className="item__title">黒髪にしたのなら。ヒロイン級の”さらさら天使の輪”な...</h5>
                  <div className="item__contributor">
                    <p className="contributor__name">tsubasa_honda</p>
                  </div>
              </div>
            </div>
          </li>
          <li className="item list__item">
            <div className="item__inner clearfix">
              <div className="item__image" style={itemImageStyle}></div>
              <div className="item__content">
                 <h5 className="item__title">黒髪にしたのなら。ヒロイン級の”さらさら天使の輪”な...</h5>
                  <div className="item__contributor">
                    <p className="contributor__name">tsubasa_honda</p>
                  </div>
              </div>
            </div>
          </li>
          <li className="item list__item">
            <div className="item__inner clearfix">
              <div className="item__image" style={itemImageStyle}></div>
              <div className="item__content">
                 <h5 className="item__title">黒髪にしたのなら。ヒロイン級の”さらさら天使の輪”な...</h5>
                  <div className="item__contributor">
                    <p className="contributor__name">tsubasa_honda</p>
                  </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
