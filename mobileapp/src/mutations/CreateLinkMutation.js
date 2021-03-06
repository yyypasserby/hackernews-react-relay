import {
  commitMutation,
  graphql
} from 'react-relay';

import environment from '../Environment';

const mutation = graphql`
  mutation CreateLinkMutation($input: CreateLinkInput!) {
    createLink(input: $input) {
      link {
        id
        description
        url
      }
    }
  }
`;

export default (postedById, description, url, callback) => {
  const variables = {
    input: {
      postedById,
      description,
      url,
      clientMutationId: ''
    }
  };

  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: () => {
        callback(null);
      },
      onError: err => callback(err)
    }
  );
};
