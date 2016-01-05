import React, { Component } from 'react';

export default class EditorItems extends Component {
  render() {
    const hiddenStyle = {
      'display': 'none'
    };
    const visibleStyle = {
      'display': 'block'
    };
    return(
      <div id="editor-items">
        <div className="items__inner">
          <div className="items__header">
            <ul className="items__header__list clearfix">
              <li className="items__header__item item--text active"><a>テキスト</a></li>
              <li className="items__header__item item--headline"><a>見出し</a></li>
              <li className="items__header__item item--image"><a>画像</a></li>
              <li className="items__header__item item--link"><a>リンク</a></li>
              <li className="items__header__item item--quotation"><a>引用</a></li>
            </ul>
          </div>
          <div className="items__newitem">
            <div className="items__newitem__inner">
              <div id="textForm" className="items__newitem--text" style={ visibleStyle }>
                <form className="items__form--text">
                  <input type="hidden" name="item[type]" value="text" />
                  <textarea className="item__form__textarea" name="item[text]" placeholder="テキストを入力"></textarea>
                  <div className="item__form__buttons clearfix">
                    <a className="btn item__form__button--add">追加</a>
                    <a className="btn item__form__button--cancel">キャンセル</a>
                  </div>
                </form>
              </div>
              <div id="headlineForm" className="items__newitem--headline" style={ hiddenStyle }>
                <form className="items__form--headline">
                  <input type="hidden" name="item[type]" value="headline" />
                  <input className="item__form__input" name="item[headline]" placeholder="見出しを入力" />
                  <div className="item__form__buttons clearfix">
                    <a className="btn item__form__button--add">追加</a>
                    <a className="btn item__form__button--cancel">キャンセル</a>
                  </div>
                </form>
              </div>
              <div id="imageForm" className="items__newitem--image" style={ hiddenStyle }>
                <input type="hidden" name="item[type]" value="image" />
                <form className="items__form--image">
                  <div className="items__form--image__inner clearfix">
                    <div className="form__image">
                      <input className="image__input" type="file" name="article[thumbnail]" />
                      <img className="item__image" src="http://miyagifukkououentai.jp/wp/wp-content/themes/ifeaturepro/noimage.jpg" />
                    </div>
                    <div className="form__area">
                      <div className="item__form__input__area clearfix">
                        <input className="item__form__input" name="item[link]" placeholder="画像のURLを入力" />
                        <a className="btn item__form__button--check">チェックする</a>
                      </div>
                      <div className="item__form__buttons clearfix">
                        <a className="btn item__form__button--add">追加</a>
                        <a className="btn item__form__button--cancel">キャンセル</a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div id="linkForm" className="items__newitem--link" style={ hiddenStyle }>
                <form className="items__form--link">
                  <input type="hidden" name="item[type]" value="link" />
                  <div className="item__form__input__area clearfix">
                    <input className="item__form__input" name="item[link]" placeholder="リンクのURLを入力" />
                    <a className="btn item__form__button--check">チェックする</a>
                  </div>
                  <div className="item__form__buttons clearfix">
                    <a className="btn item__form__button--add">追加</a>
                    <a className="btn item__form__button--cancel">キャンセル</a>
                  </div>
                </form>
              </div>
              <div id="quotationForm" className="items__newitem--quotation" style={ hiddenStyle }>
                <form className="items__form--quotation">
                  <input type="hidden" name="item[type]" value="quotation" />
                  <input className="item__form__input" name="item[quotation]" placeholder="引用を入力" />
                  <div className="item__form__subinfo">
                    <div className="item__form__input__area clearfix">
                      <input className="item__form__input" name="item[quotation_link]" placeholder="引用の出典元URLを入力" />
                      <a className="btn item__form__button--check">チェックする</a>
                    </div>
                    <input className="item__form__input" name="item[quotation_source]" placeholder="引用の出典を入力" />
                  </div>
                  <div className="item__form__buttons clearfix">
                    <a className="btn item__form__button--add">追加</a>
                    <a className="btn item__form__button--cancel">キャンセル</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
