import React, { Component } from 'react';

export default class ArticleHeader extends Component {
  render() {
    return(
      <header id="article-header">
        <div className="header__inner clearfix">
          <div className="article__header--main">
            <div className="main__inner clearfix">
              <div className="article__image">
                <img src="http://miyagifukkououentai.jp/wp/wp-content/themes/ifeaturepro/noimage.jpg" />
              </div>
              <div className="article__content">
                <h1 className="article__title">黒髪にしたのなら。ヒロイン級の”さらさら天使の輪”な美髪をなびかせましょ♡</h1>
                <p className="article__description">黒髪にしました。でも、黒髪って重くてダメージが目立つような…なりたいのは漫画のヒロインのような天使の輪が光るさらさら髪。そんな美髪になるために毎日ヘアケアを行いましょう。大変なヘアケアではなく毎日のケアを...</p>
                <div className="article__info">
                  <img className="contributor__avator" src="http://miyagifukkououentai.jp/wp/wp-content/themes/ifeaturepro/noimage.jpg" />
                  <a className="contributor__name" href="#">新保麻粋</a>
                  <span>|</span>
                  <span className="article__updated-at">2016年1月2日</span>
                </div>
              </div>
            </div>
          </div>
          <div className="article__header--sub">
            <div className="article__count clearfix">
              <div className="article__count__content fav">
                <p className="article__count__count">100</p>
                <p className="article__count__text">お気に入り</p>
              </div>
              <div className="article__count__content views">
                <p className="article__count__count">12345</p>
                <p className="article__count__text">views</p>
              </div>
            </div>
            <div className="article__fav">
              <a className="btn article__fav-btn" href="#">
                <i className="fa fa-star-o"></i>お気に入り 
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
