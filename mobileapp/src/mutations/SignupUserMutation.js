import {
  commitMutation,
  graphql
} from 'react-relay';

import environment from '../Environment';

const mutation = graphql`
  mutation SignupUserMutation($email: String!, $password: String!) {
    signupUser(email: $email, password: $password) {
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
        if (resp.signupUser) {
          const { id, token } = this.signupUser;
          callback(null, id, token);
        } else {
          callback(new Error('Sign up user failed!'));
        }
      },
      onError: err => callback(err)
    }
  );
};
