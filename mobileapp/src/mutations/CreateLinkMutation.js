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

export default (description, url, callback) => {
  const variables = {
    input: {
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
        callback();
      },
      onError: err => console.log(err)
    }
  );
};
