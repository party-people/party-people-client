import React, { Component } from 'react';

export default class EditorBody extends Component {
  render() {
    return (
      <div id="editor-body">
        <div className="body__inner">
          <article id="articleBody" className="article__body">
            <div className="article__item article__item--draft">
              <div className="article__item__control">
                <div className="control__inner">
                  <a className="control__item control--up"><i className="fa fa-angle-up" /></a>
                  <a className="control__item control--top"><i className="fa fa-angle-double-up" /></a>
                  <a className="control__item control--down"><i className="fa fa-angle-down" /></a>
                  <a className="control__item control--bottom"><i className="fa fa-angle-double-down" /></a>
                </div>
              </div>
              <div className="article__item__content">
                <h2 className="article__item--headline">headline</h2>
              </div>
              <div className="article__item__edit">
                <p className="edit__inner">
                  <a><i className="fa fa-edit"></i>編集</a>
                  <span className="line">|</span>
                  <a><i className="fa fa-trash"></i>削除</a>
                </p>
              </div>
            </div>
            <div className="article__item article__item--draft">
              <div className="article__item__control">
                <div className="control__inner">
                  <a className="control__item control--up"><i className="fa fa-angle-up" /></a>
                  <a className="control__item control--top"><i className="fa fa-angle-double-up" /></a>
                  <a className="control__item control--down"><i className="fa fa-angle-down" /></a>
                  <a className="control__item control--bottom"><i className="fa fa-angle-double-down" /></a>
                </div>
              </div>
              <div className="article__item__content">
                <p className="article__item--text">text</p>
              </div>
              <div className="article__item__edit">
                <p className="edit__inner">
                  <a><i className="fa fa-edit"></i>編集</a>
                  <span className="line">|</span>
                  <a><i className="fa fa-trash"></i>削除</a>
                </p>
              </div>
            </div>
            <div className="article__item article__item--draft">
              <div className="article__item__control">
                <div className="control__inner">
                  <a className="control__item control--up"><i className="fa fa-angle-up" /></a>
                  <a className="control__item control--top"><i className="fa fa-angle-double-up" /></a>
                  <a className="control__item control--down"><i className="fa fa-angle-down" /></a>
                  <a className="control__item control--bottom"><i className="fa fa-angle-double-down" /></a>
                </div>
              </div>
              <div className="article__item__content">
                <div className="article__item--image clearfix">
                  <div className="image__area">
                    <img className="image__image" src="http://miyagifukkououentai.jp/wp/wp-content/themes/ifeaturepro/noimage.jpg" />
                  </div>
                  <div className="text__area">
                    <h4 className="image__title">image title</h4>
                    <p className="image__comment">image comment</p>
                  </div>
                </div>
              </div>
              <div className="article__item__edit">
                <p className="edit__inner">
                  <a><i className="fa fa-edit"></i>編集</a>
                  <span className="line">|</span>
                  <a><i className="fa fa-trash"></i>削除</a>
                </p>
              </div>
            </div>
            <div className="article__item article__item--draft">
              <div className="article__item__control">
                <div className="control__inner">
                  <a className="control__item control--up"><i className="fa fa-angle-up" /></a>
                  <a className="control__item control--top"><i className="fa fa-angle-double-up" /></a>
                  <a className="control__item control--down"><i className="fa fa-angle-down" /></a>
                  <a className="control__item control--bottom"><i className="fa fa-angle-double-down" /></a>
                </div>
              </div>
              <div className="article__item__content">
                <div className="article__item--link">
                  <h4 className="link__title"><a href="#" target="_blank">NAVER まとめ[情報をデザインする。キュレーションプラットフォーム]</a></h4>
                  <a className="link__url" href="#" target="_blank">http://matome.naver.jp/</a>
                  <p className="link__description">あらゆる情報を、自由に組み合わせ、ひとつのページにまとめて保存・紹介できるサービス。誰もが[情報をデザイン]できるようにすることで、今までにない人と情報との出会いを実現します。</p>
                </div>
              </div>
              <div className="article__item__edit">
                <p className="edit__inner">
                  <a><i className="fa fa-edit"></i>編集</a>
                  <span className="line">|</span>
                  <a><i className="fa fa-trash"></i>削除</a>
                </p>
              </div>
            </div>
            <div className="article__item article__item--draft">
              <div className="article__item__control">
                <div className="control__inner">
                  <a className="control__item control--up"><i className="fa fa-angle-up" /></a>
                  <a className="control__item control--top"><i className="fa fa-angle-double-up" /></a>
                  <a className="control__item control--down"><i className="fa fa-angle-down" /></a>
                  <a className="control__item control--bottom"><i className="fa fa-angle-double-down" /></a>
                </div>
              </div>
              <div className="article__item__content">
                <div className="article__item--quotation">
                  <h4 className="quotation__text">quotation</h4>
                  <p className="quotation__link">出典：<a className="link" href="#" target="_blank">https://tech-camp.in</a></p>
                  <blockquote className="quotation__comment">tech-camp</blockquote>
                </div>
              </div>
              <div className="article__item__edit">
                <p className="edit__inner">
                  <a><i className="fa fa-edit"></i>編集</a>
                  <span className="line">|</span>
                  <a><i className="fa fa-trash"></i>削除</a>
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }
}
