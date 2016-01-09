import React, { Component } from 'react';
import EditorItem from './EditorItem';

export default class EditorBody extends Component {
  render() {
    return (
      <div id="editor-body">
        <div className="body__inner">
          <article id="articleBody" className="article__body">
            <EditorItem>
              <h2 className="article__item--headline">headline</h2>
            </EditorItem>
            <EditorItem>
              <p className="article__item--text">text</p>
            </EditorItem>
            <EditorItem>
              <div className="article__item--image clearfix">
                <div className="image__area">
                  <img className="image__image" src="http://miyagifukkououentai.jp/wp/wp-content/themes/ifeaturepro/noimage.jpg" />
                </div>
                <div className="text__area">
                  <h4 className="image__title">image title</h4>
                  <p className="image__comment">image comment</p>
                </div>
              </div>
            </EditorItem>
            <EditorItem>
              <div className="article__item--link">
                <h4 className="link__title"><a href="#" target="_blank">NAVER まとめ[情報をデザインする。キュレーションプラットフォーム]</a></h4>
                <a className="link__url" href="#" target="_blank">http://matome.naver.jp/</a>
                <p className="link__description">あらゆる情報を、自由に組み合わせ、ひとつのページにまとめて保存・紹介できるサービス。誰もが[情報をデザイン]できるようにすることで、今までにない人と情報との出会いを実現します。</p>
              </div>
            </EditorItem>
            <EditorItem>
              <div className="article__item--quotation">
                <h4 className="quotation__text">quotation</h4>
                <p className="quotation__link">出典：<a className="link" href="#" target="_blank">https://tech-camp.in</a></p>
                <blockquote className="quotation__comment">tech-camp</blockquote>
              </div>
            </EditorItem>
          </article>
        </div>
      </div>
    );
  }
}
