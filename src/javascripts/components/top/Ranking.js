import React, { Component, PropTypes } from 'react';
import RankingHeader from './RankingHeader';
import ListItem from '../partials/ListItem';

export default class Ranking extends Component {
  render() {
    const { articles } = this.props;
    const itemNodes = articles.map( (article) =>
      <ListItem key={article.id} article={article} />
    );
    return(
      <div className="side__content">
        <RankingHeader />
        <ul className="side__content__items">
          { itemNodes }
        </ul>
      </div>
    );
  }
}

Ranking.propTypes = {
  articles: PropTypes.array.isRequired
}
