import React, { Component, PropTypes } from 'react';
import PickupItem from './PickupItem';
import If from '../utilities/If';

export default class Pickup extends Component {
  render() {
    const { articles } = this.props;
    return(
      <div id="pickup" classNameName="pickup">
        <div className="pickup__inner clearfix">
          <div className="pickup__main">
            <If show={articles.length>0}>
              <PickupItem article={articles[0]} index={0} />
            </If>
          </div>
          <div className="pickup__sub">
            <div className="pickup__sub01">
              <If show={articles.length>1}>
                <PickupItem article={articles[1]} index={1} />
              </If>
            </div>
            <div className="pickup__sub02">
              <If show={articles.length>2}>
                <PickupItem article={articles[2]} index={2} />
              </If>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Pickup.propTypes = {
  articles: PropTypes.array.isRequired
}
