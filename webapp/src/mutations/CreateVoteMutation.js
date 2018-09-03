import {
  commitMutation,
  graphql
} from 'react-relay';

import environment from '../Environment';

const mutation = graphql`
  mutation CreateVoteMutation($input: CreateVoteInput!) {
    createVote(input: $input) {
      vote {
        id
        link {
          id
          votes {
            count
          }
        }
        user {
          id
        }
      }
    }
  }
`;

export default (userId, linkId, callback) => {
  const variables = {
    input: {
      userId,
      linkId,
      clientMutationId: ''
    }
  };

  commitMutation(
    environment,
    {
      mutation,
      variables,
      optimisticUpdater: proxyStore => {
        const link = proxyStore.get(linkId);
        const currentVoteCount = link
        .getLinkedRecord('votes')
        .getValue('count');
        link.getLinkedRecord('votes').setValue(currentVoteCount + 1, 'count');
      },
      updater: proxyStore => {
        const link = proxyStore.get(linkId);
        const newCountVote = proxyStore
        .getRootField('createVote')
        .getLinkedRecord('vote')
        .getLinkedRecord('link')
        .getLinkedRecord('votes')
        .getValue('count');

        link.getLinkedRecord('votes').setValue(newCountVote, 'count');
      },
      onError: err => console.error(err)
    }
  );
};
