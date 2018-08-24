import React, { Component } from 'react';
import {
  createFragmentContainer,
  graphql
} from 'react-relay';
import { View, Text } from 'react-native';

class Link extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.link.description}({this.props.link.url})</Text>
      </View>
    );
  }
}

export default createFragmentContainer(Link, graphql`
  fragment Link_link on Link {
    id
    description
    url
  }
`);
