import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchTop } from '../actions/top';
import { denormalizeArticles } from '../api/article';
import { denormalizeCategories } from '../api/category';
import Pickup from '../components/top/Pickup';
import CategoryList from '../components/top/CategoryList';
import Timeline from '../components/top/Timeline';
import Ranking from '../components/top/Ranking';

class Top extends Component {
  componentDidMount() {
    this.props.dispatch(fetchTop());
  }
  render() {
    const { pickup, articles, categories, ranking } = this.props;
    return(
      <div id="top">
        <Pickup pickup={pickup} />
        <div id="wrapper" className="clearfix">
          <div id="main-content" className="clearfix">
            <CategoryList categories={categories} />
            <Timeline articles={articles} />
          </div>
          <div id="side-content">
            <Ranking ranking={ranking} />
          </div>
        </div>
      </div>
    );
  }
}

Top.propTypes = {
  pickup: PropTypes.array.isRequired,
  articles: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  ranking: PropTypes.array
}

function mapStateToProps(state) {
  const { top, entities } = state;
  const articles = denormalizeArticles(top.articles, entities);
  const pickup = denormalizeArticles(top.pickup, entities);
  const ranking = denormalizeArticles(top.ranking, entities);
  const categories = denormalizeCategories(top.categories, entities);
  return { pickup, articles, categories, ranking };
}

export default connect(mapStateToProps)(Top);
