import React, { Component } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  QueryRenderer,
  graphql
} from 'react-relay';

import LinkList from './LinkList';
import environment from '../Environment';

const LinkListViewQuery = graphql`
  query LinkListViewQuery {
    viewer {
      ...LinkList_viewer
    }
  }
`;

class LinkListView extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={LinkListViewQuery}
        render={({ error, props }) => {
          if (error) {
            return <Text>Error loading link list: {error.message}</Text>;
          } else if (props) {
            return <LinkList viewer={props.viewer} />;
          }
          return <ActivityIndicator style={styles.indicator} />;
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  indicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LinkListView;
