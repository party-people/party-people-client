import React, { Component, PropTypes } from 'react';

export default class EditorInfo extends Component {
  render() {
    const { 
      article: { title, description, thumbnailUrl}
    } = this.props;
    return(
      <div id="editor-info">
        <div className="info__inner clearfix">
          <div className="info__image">
            <input className="image__input" type="file" name="article[thumbnail]" />
            <img className="article__image" src="http://miyagifukkououentai.jp/wp/wp-content/themes/ifeaturepro/noimage.jpg" />
          </div>
          <div className="info__text">
            <div className="info__title">
              <input className="title__input" type="text" name="article[title]" placeholder="まとめのタイトル" value={title} />
            </div>
            <div className="info__description">
              <textarea className="description__textarea" name="article[description]" placeholder="まとめの説明（160文字以内）" value={description}></textarea>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

EditorInfo.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired
  }).isRequired
}
