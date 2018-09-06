import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  createFragmentContainer,
  fetchQuery,
  graphql,
} from 'react-relay';
import { withRouter } from 'react-router';

import CreateVoteMutation from '../mutations/CreateVoteMutation';
import environment from '../Environment';
import {
  showMessageAndLog,
  timeDifferenceForDate,
} from '../utils';

class Link extends Component {
  render() {
    const {
      createdAt,
      description,
      postedBy,
      url,
      votes,
    } = this.props.link;
    return (
      <TouchableOpacity onPress={this._voteForLink}>
        <Text style={styles.description}>
          {description}
          <Text style={styles.url}>
            ({url})
          </Text>
        </Text>
        <Text style={styles.info}>
          {votes.count} votes | by {postedBy ? postedBy.email : 'Unknown'} {timeDifferenceForDate(createdAt)}
        </Text>
      </TouchableOpacity>
    );
  }

  _voteForLink = async () => {
    const {link, userId} = this.props;
    if (!userId) {
      showMessageAndLog('info', `Can't vote without user ID`);
      this.props.history.push('/account');
      return;
    }
    const canUserVoteOnLink = await this._userCanVoteOnLink(userId, link.id);
    if (canUserVoteOnLink) {
      CreateVoteMutation(userId, link.id);
    } else {
      showMessageAndLog('info', 'You have already vote on this link.');
    }
  };

  _userCanVoteOnLink = async (userId, linkId) => {
    const query = graphql`
      query LinkCheckVoteQuery($voteFilter: VoteFilter!) {
        viewer {
          allVotes(filter: $voteFilter) {
            edges {
              node {
                id
              }
            }
          }
        }
      }
    `;

    const result = await fetchQuery(environment, query, {
      voteFilter: {
        user: { id: userId },
        link: { id: linkId },
      },
    });
    return result.viewer.allVotes.edges.length === 0;
  };
}

const styles = StyleSheet.create({
  description: {
    color: 'black',
    fontSize: 20,
    padding: 5,
  },
  info: {
    fontSize: 15,
    paddingLeft: 5,
    color: 'gray',
  },
  url: {
    color: 'gray',
  },
});

export default withRouter(createFragmentContainer(Link, graphql`
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
`));
