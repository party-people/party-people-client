import React, { Component } from 'react';
import ArticleHeader from '../components/article/ArticleHeader';
import ArticleBody from '../components/article/ArticleBody';
import Ranking from '../components/top/Ranking';

export default class Article extends Component {
  render() {
    return(
      <article id="article">
        <ArticleHeader />
        <div id="wrapper" className="clearfix">
          <div id="main-content" className="clearfix">
            <ArticleBody />
          </div>
          <div id="side-content">
            <Ranking />
          </div>
        </div>
      </article>
    );
  }
}
