import React, { Component } from 'react';

export default class RankingHeader extends Component {
  render() {
    return(
      <header className="side__content__header">
        <h4 className="side__content__title">ランキング総合</h4>
        <p className="side__content__subtitle">最近人気のあった記事</p>
      </header>
    );
  }
}
