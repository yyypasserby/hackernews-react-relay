import React, { Component } from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet
} from 'react-native';
import {
  createFragmentContainer,
  graphql
} from 'react-relay';

import Link from './Link'

class LinkList extends Component {
  render() {
    const items = this.props.viewer.allLinks.edges.map(({ node }, index) => ({
      node,
      key: index + ''
    }));
    return (
      <ScrollView>
        <FlatList
          data={items}
          renderItem={({ item }) =>
            <Link link={item.node} />
          }
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  listView: {
    flex: 1,
  }
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
