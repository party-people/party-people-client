import React, { Component, PropTypes } from 'react';
import TimelineItem from '../partials/TimelineItem';

export default class Timeline extends Component {
  render() {
    const { articles } = this.props;
    const itemNodes = articles.map( (article) =>
      <TimelineItem key={article.id} article={article} />
    );
    return(
      <div id="timeline">
        <div className="timeline__inner">
          <header className="timeline__header clearfix">
            <h3>注目の記事</h3>
            <p>今日注目されている記事の一覧</p>
          </header>
          <ul className="timeline__list">
            { itemNodes }
          </ul>
        </div>
      </div>
    );
  }
}

Timeline.propTypes = {
  articles: PropTypes.array.isRequired
}
