import React, { Component } from 'react';
import {
  createPaginationContainer,
  graphql
} from 'react-relay';

import { ITEMS_PER_PAGE } from '../constants';

import Link from './Link';

class LinkList extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.viewer.allLinks.edges.map(({ node }, index) => (
            <Link key={node.__id} index={index} link={node} />
          ))}
        </div>
        <div className='flex ml4 mv3 gray'>
          <div className='pointer' onClick={this._loadMore}>More</div>
        </div>
      </div>
    );
  }

  _loadMore = () => {
    if (!this.props.relay.hasMore() || this.props.relay.isLoading()) {
      console.log('The pagination is working on loading more.');
      return;
    }

    this.props.relay.loadMore(ITEMS_PER_PAGE);
  };
}

export default createPaginationContainer(LinkList,
  {
    viewer: graphql`
    fragment LinkList_viewer on Viewer {
      allLinks(
        first: $count,
        after: $after,
        orderBy: createdAt_DESC
      ) @connection(key: "LinkList_allLinks") {
        edges {
          node {
            ...Link_link
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
    `,
  },
  {
    direction: 'forward',
    query: graphql`
    query LinkListForwardQuery (
      $count: Int!,
      $after: String,
    ) {
      viewer {
        ...LinkList_viewer
      }
    }
    `,
    getConnectionFromProps(props) {
      return props.viewer && props.viewer.allLinks;
    },
    getFragmentVariables(previousVariables, totalCount) {
      return {
        ...previousVariables,
        count: totalCount
      };
    },
    getVariables(props, { count, cursor }, fragmentVariables) {
      return {
        count: count,
        after: cursor
      };
    },
  }
);
