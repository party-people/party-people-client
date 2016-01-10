import React, { Component, PropTypes } from 'react';
import Input from '../form/Input';
import FileInput from '../form/FileInput';
import TextArea from '../form/TextArea';

export default class EditorInfo extends Component {
  render() {
    const { 
      article, fields: { title, description, thumbnail }
    } = this.props;
    return(
      <div id="editor-info">
        <div className="info__inner clearfix">
          <div className="info__image">
            <FileInput className="image__input" field={thumbnail} />
            <img className="article__image" src="http://miyagifukkououentai.jp/wp/wp-content/themes/ifeaturepro/noimage.jpg" />
          </div>
          <div className="info__text">
            <div className="info__title">
              <Input className="title__input" field={title} placeholder="まとめのタイトル" defaultValue={article.title} />
            </div>
            <div className="info__description">
              <TextArea className="description__textarea" field={description} placeholder="まとめの説明（160文字以内）" defaultValue={article.description} />
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
  }).isRequired,
  fields: PropTypes.object.isRequired
}
