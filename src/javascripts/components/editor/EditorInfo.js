import React, { Component } from 'react';

export default class EditorInfo extends Component {
  render() {
    return(
      <div id="editor-info">
        <div className="info__inner clearfix">
          <div className="info__image">
            <input className="image__input" type="file" name="article[thumbnail]" />
            <img className="article__image" src="http://miyagifukkououentai.jp/wp/wp-content/themes/ifeaturepro/noimage.jpg" />
          </div>
          <div className="info__text">
            <div className="info__title">
              <input className="title__input" type="text" name="article[title]" placeholder="まとめのタイトル" />
            </div>
            <div className="info__description">
              <textarea className="description__textarea" name="article[description]" placeholder="まとめの説明（160文字以内）"></textarea>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
