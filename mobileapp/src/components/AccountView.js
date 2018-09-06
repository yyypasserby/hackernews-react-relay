import React, { Component } from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  FONT_PRIMARY,
  GC_USER_ID,
  GC_AUTH_TOKEN,
} from '../constants';

import AuthenticateUserMutation from '../mutations/AuthenticateUserMutation';
import SignupUserMutation from '../mutations/SignupUserMutation';

class AccountView extends Component {
  state = {
    isLoading: true,
    userId: null,
    login: true,
    email: '',
    password: '',
  }

  componentDidMount() {
    (async () => {
      try {
        const userId = await AsyncStorage.getItem(GC_USER_ID);
        if (userId) {
          this.setState({ userId });
        }
        this.setState({ isLoading: false });
      } catch (err) {
        console.log('Fetching userId failed!');
        this.setState({ isLoading: false });
      }
    })();
  }

  render() {
    if (this.state.isLoading) {
      return <ActivityIndicator style={styles.indicator} />;
    }
    if (this.state.userId) {
      return (
        <TouchableOpacity onPress={this._logout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      );
    }
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          onChangeText={text => this.setState({ email: text })}
          placeholder='Email'
          textContentType='emailAddress'
          autoFocus={true}
          autoCapitalize='none'
        />
        <TextInput
          onChangeText={text => this.setState({ password: text })}
          placeholder='Password'
          style={styles.textInput}
          secureTextEntry={true}
          textContentType='password'
        />
        <TouchableOpacity onPress={this._confirm}>
          <Text style={styles.buttonText}>
            {this.state.login ? 'Login' : 'Creat an Account'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.setState(prev => ({ login: !prev.login }))}>
          <Text style={styles.buttonText}>
            {this.state.login ? 'Need an Account?' : 'Already have the Account!'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  _confirm = () => {
    const { email, password } = this.state;
    if (this.state.login) {
      AuthenticateUserMutation(email, password, async (id, token) => {
        await this._saveUserData(id, token);
        this.setState({ userId: id });
      });
    } else {
      SignupUserMutation(email, password, async (id, token) => {
        await this._saveUserData(id, token);
        this.setState({ userId: id });
      });
    }
  };

  _saveUserData = async (id, token) => {
    try {
      await AsyncStorage.setItem(GC_USER_ID, id);
      await AsyncStorage.setItem(GC_AUTH_TOKEN, token);
    } catch (err) {
      console.error('Set userId failed!');
    }
  };

  _logout = async () => {
    try {
      await AsyncStorage.removeItem(GC_USER_ID);
      await AsyncStorage.removeItem(GC_AUTH_TOKEN);
      this.setState({ userId: null });
    } catch (err) {
      console.error('Remove userId failed!');
    }
  };
}

const styles = StyleSheet.create({
  buttonText: {
    color: FONT_PRIMARY,
    fontSize: 30,
    padding: 10,
  },
  container: {
    flex: 1,
  },
  indicator: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  textInput: {
    color: FONT_PRIMARY,
    fontSize: 30,
    padding: 10,
  },
});

export default AccountView;
