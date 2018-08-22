import React, { Component } from 'react';

import { GC_USER_ID, GC_AUTH_TOKEN } from '../constants'
import AuthenticateUserMutation from '../mutations/AuthenticateUserMutation';
import SignupUserMutation from '../mutations/SignupUserMutation';

class Login extends Component {
  state = {
    login: true, // flag to switch from Login to Sign Up.
    email: '',
    password: '',
  }

  render() {
    return (
      <div>
        <div>
          <h4>{this.state.login ? 'Login' : 'Sign Up'}</h4>
          <input
            type='text'
            placeholder='Your email address'
            onChange={(e) => this.setState({ email: e.target.value })}
            value={this.state.email}
          />
          <input
            type='password'
            placeholder='Your password'
            onChange={(e) => this.setState({ password: e.target.value })}
            value={this.state.password}
          />
        </div>
        <div>
          <button onClick={this._confirm}>
            {this.state.login ? 'login' : 'create account'}
          </button>
          <button onClick={() => this.setState(prev => ({ login: !prev.login }))}>
            {this.state.login ? 'need a new account' : 'already have an account'}
          </button>
        </div>
      </div>
    );
  }

  _confirm = async () => {
    const { email, password } = this.state;
    if (this.state.login) {
      AuthenticateUserMutation(email, password, (id, token) => {
        this._saveUserData(id, token);
        this.props.history.push('/');
      });
    } else {
      SignupUserMutation(email, password, (id, token) => {
        this._saveUserData(id, token);
        this.props.history.push('/');
      });
    }
  };

  _saveUserData = (id, token) => {
    localStorage.setItem(GC_USER_ID, id);
    localStorage.setItem(GC_AUTH_TOKEN, token);
  };
}

export default Login;
