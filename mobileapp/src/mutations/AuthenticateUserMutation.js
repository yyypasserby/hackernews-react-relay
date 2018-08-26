import {
  commitMutation,
  graphql
} from 'react-relay';

import environment from '../Environment';

const mutation = graphql`
  mutation AuthenticateUserMutation($email: String!, $password: String!) {
    authenticateUser(email: $email, password: $password) {
      id
      token
    }
  }
`;

export default (email, password, callback) => {
  const variables = {
    email,
    password
  };

  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: resp => {
        if (resp.authenticateUser) {
          const { id, token } = resp.authenticateUser;
          callback(id, token);
        } else {
          console.log('Authenticate user failed!');
        }
      },
      onError: err => console.error(err)
    }
  );
};
