import React, { Component } from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  COLOR_ORANGE,
  COLOR_BG_GRAY,
  FONT_PRIMARY,
} from './constants';

import LinkListPage from './components/LinkListPage';

class MainView extends Component {
  state = {
    currentTab: 'new'
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Hacker News</Text>
        <LinkListPage />
        <View style={styles.bottomBar}>
          <Text onPress={() => this._setCurrentTab('new')} style={styles.bottomBarButton}>New</Text>
          <Text onPress={() => this._setCurrentTab('submit')} style={styles.bottomBarButton}>Submit</Text>
          <Text onPress={() => this._setCurrentTab('account')} style={styles.bottomBarButton}>Account</Text>
        </View>
      </SafeAreaView>
    );
  }

  _setCurrentTab = (tab) => {
    this.setState({ currentTab: tab });
  };
}

const styles = StyleSheet.create({
  bottomBar: {
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: COLOR_ORANGE,
  },
  bottomBarButton: {
    color: FONT_PRIMARY,
    fontFamily: 'Verdana',
  },
  container: {
    flex: 1,
    backgroundColor: COLOR_BG_GRAY,
  },
  header: {
    fontSize: 24,
    backgroundColor: COLOR_ORANGE,
    fontFamily: 'Verdana',
  },
});

export default MainView;
