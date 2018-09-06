import React, { Component } from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  FlatList,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {
  createFragmentContainer,
  graphql
} from 'react-relay';

import { GC_USER_ID } from '../constants';
import { showMessageAndLog } from '../utils';

import Link from './Link';

class LinkList extends Component {
  state = {
    isLoading: true,
    userId: null,
  }

  componentDidMount() {
    (async () => {
      try {
        const userId = await AsyncStorage.getItem(GC_USER_ID);
        if (userId) {
          this.setState({ userId });
        }
      } catch (err) {
        showMessageAndLog('danger', 'Fetch userId failed!');
      } finally {
        this.setState({ isLoading: false });
      }
    })();
  }

  render() {
    if (this.state.isLoading) {
      return <ActivityIndicator style={styles.indicator} />;
    }

    const items = this.props.viewer.allLinks.edges.map(({ node }, index) => ({
      node,
      key: index + ''
    }));
    return (
      <ScrollView>
        <FlatList
          data={items}
          renderItem={({ item }) =>
            <Link link={item.node} userId={this.state.userId} />
          }
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  indicator: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default createFragmentContainer(LinkList, graphql`
  fragment LinkList_viewer on Viewer {
    allLinks(last: 100, orderBy: createdAt_DESC) @connection(key: "LinkList_allLinks", filters: []) {
      edges {
        node {
          ...Link_link
        }
      }
    }
  }
`);
