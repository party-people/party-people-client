import React, { Component } from 'react';
import ArticleItem from './ArticleItem';
import ItemHeadline from './item/ItemHeadline';
import ItemText from './item/ItemText';
import ItemImage from './item/ItemImage';
import ItemLink from './item/ItemLink';
import ItemQuotation from './item/ItemQuotation';

export default class ArticleBody extends Component {
  render() {
    return(
      <div id="articleBody" className="article__body">
        <ArticleItem>
          <ItemHeadline title={"なんだか惹かれる彼女のファッション。"} />
        </ArticleItem>
        <ArticleItem>
          <ItemText text={"会うたび意識して見てしまういつもおしゃれな彼女のコーディネート。"} />
        </ArticleItem>
        <ArticleItem>
          <ItemImage title={"小物使いが上手"} comment={"おしゃれな彼女は 小物の量と配置を理解してる。 好きなものを好きなだけ付けるんじゃなくて 「足りないところをアクセサリーで補う」 それが、本当のお洒落"} imageUrl={"http://content.mery.jp/1100x2000/images/867779/large.jpg/original"} />
        </ArticleItem>
        <ArticleItem>
          <ItemLink title={"NAVER まとめ[情報をデザインする。キュレーションプラットフォーム]"} sourceUrl={"http://matome.naver.jp/"} description={"あらゆる情報を、自由に組み合わせ、ひとつのページにまとめて保存・紹介できるサービス。誰もが[情報をデザイン]できるようにすることで、今までにない人と情報との出会いを実現します。"} />
        </ArticleItem>
        <ArticleItem>
          <ItemQuotation text={"トレンドをおさえるなら「テロンチ」"} comment={"2016年春の新しいブームとなりそうなのが、 テロンチ。"} source={"テロンチの可愛い着こなしコーデ！2016年春のトレンドをチェック | 旅ぴっぴ"} sourceUrl={"http://tabippi.com/archives/2356.html"} />
        </ArticleItem>
      </div>
    );
  }
}
