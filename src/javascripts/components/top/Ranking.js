import React, { Component } from 'react';
import RankingHeader from './RankingHeader';
import ListItem from '../partials/ListItem';

export default class Ranking extends Component {
  render() {
    const itemNodes = [1,2,3,4,5].map( (item) =>
      <ListItem key={ item } />
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
