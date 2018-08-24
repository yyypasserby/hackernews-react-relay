import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  createFragmentContainer,
  graphql
} from 'react-relay';

class Link extends Component {
  render() {
    return (
      <TouchableOpacity>
        <Text style={styles.description}>
          {this.props.link.description}
          <Text style={styles.link}>
            ({this.props.link.url})
          </Text>
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  description: {
    color: 'black',
    fontSize: 20,
    padding: 30,
  },
  link: {
    color: 'gray',
  },
});

export default createFragmentContainer(Link, graphql`
  fragment Link_link on Link {
    id
    description
    url
  }
`);
