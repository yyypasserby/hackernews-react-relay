import React, { Component } from 'react';
import {
  QueryRenderer,
  graphql
} from 'react-relay';

import { ITEMS_PER_PAGE } from '../constants';

import LinkList from './LinkList';
import environment from '../Environment';

const LinkListPageQuery = graphql`
  query LinkListPageQuery(
    $count: Int!,
    $after: String
  ) {
    viewer {
      ...LinkList_viewer
    }
  }
`;

class LinkListPage extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        variables={{ count: ITEMS_PER_PAGE }}
        query={LinkListPageQuery}
        render={({error, props}) => {
          if (error) {
            console.log('error in query renderer', error);
            return <div>{error.message}</div>;
          } else if (props) {
            return <LinkList viewer={props.viewer} />;
          }
          return <div>Loading</div>;
        }}
      />
    );
  }
}

export default LinkListPage;
