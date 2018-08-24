import React, { Component } from 'react';
import { Text } from 'react-native';
import {
  QueryRenderer,
  graphql
} from 'react-relay';

import LinkList from './LinkList';
import environment from '../Environment';

const LinkListPageQuery = graphql`
  query LinkListPageQuery {
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
        query={LinkListPageQuery}
        render={({ error, props }) => {
          if (error) {
            return <Text>Error loading link list: {error.message}</Text>;
          } else if (props) {
            console.log('viewer', props.viewer);
            return <LinkList viewer={props.viewer}/>;
          }
          return <Text>Loading</Text>;
        }}
      />
    );
  }
}

export default LinkListPage;
