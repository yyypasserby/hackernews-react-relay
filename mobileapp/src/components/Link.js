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

import { timeDifferenceForDate } from '../utils';

class Link extends Component {
  render() {
    return (
      <TouchableOpacity>
        <Text style={styles.description}>
          {this.props.link.description}
          <Text style={styles.url}>
            ({this.props.link.url})
          </Text>
        </Text>
        <Text style={styles.info}>
          {this.props.link.votes.count} votes | by {this.props.link.postedBy ? this.props.link.postedBy.email : 'Unknown'} {timeDifferenceForDate(this.props.link.createdAt)}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  description: {
    color: 'black',
    fontSize: 20,
    padding: 5,
  },
  url: {
    color: 'gray',
  },
  info: {
    fontSize: 15,
    paddingLeft: 5,
    color: 'gray',
  }
});

export default createFragmentContainer(Link, graphql`
  fragment Link_link on Link {
    id
    description
    url
    createdAt
    postedBy {
      id
      email
    }
    votes {
      count
    }
  }
`);
