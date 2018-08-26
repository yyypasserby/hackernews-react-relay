import React, { Component } from 'react';
import {
  AsyncStorage,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  COLOR_GRAY,
  FONT_PRIMARY,
  GC_USER_ID,
} from '../constants';

import CreateLinkMutation from '../mutations/CreateLinkMutation';

class CreateLinkView extends Component {
  state = {
    description: '',
    url: ''
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          onChangeText={text => this.setState({ description: text })}
          placeholder='Description'
        />
        <TextInput
          style={styles.textInput}
          onChangeText={text => this.setState({ url: text })}
          placeholder='URL'
        />
        <TouchableOpacity onPress={this._submit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }

  _submit = async () => {
    let userId = null;
    try {
      userId = await AsyncStorage.getItem(GC_USER_ID);
    } catch (err) {
      console.log('Fetch userId failed!');
    }
    const { description, url } = this.state;
    CreateLinkMutation(userId, description, url, () => this.props.history.push('/'));
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    color: FONT_PRIMARY,
    fontSize: 30,
    padding: 10,
  },
  submitButtonText: {
    color: FONT_PRIMARY,
    fontSize: 30,
    padding: 10,
  }
});

export default CreateLinkView;
