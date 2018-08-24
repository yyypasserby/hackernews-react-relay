import React, { Component } from 'react';
import {
  createFragmentContainer,
  graphql
} from 'react-relay';
import { View } from 'react-native';

import Link from './Link'

class LinkList extends Component {
  render() {
    return (
      <View>
        {this.props.viewer.allLinks.edges.map(({ node }, index) =>
          <Link key={node.__id} index={index} link={node} />
        )}
      </View>
    );
  }
}

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
