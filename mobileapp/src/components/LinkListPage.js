import React, { Component } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  QueryRenderer,
  graphql } from 'react-relay';

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
      <View style={styles.container}>
        <QueryRenderer
          environment={environment}
          query={LinkListPageQuery}
          render={({ error, props }) => {
            if (error) {
              return <Text>Error loading link list: {error.message}</Text>;
            } else if (props) {
              return <LinkList viewer={props.viewer} />;
            }
            return <ActivityIndicator style={styles.indicator} size="large" color="#0000ff" />;
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  indicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LinkListPage;
