import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

import {
  COLOR_ORANGE,
  COLOR_BG_GRAY,
  FONT_PRIMARY,
} from './constants';

import LinkListPage from './components/LinkListPage';
import BottomBar from  './components/BottomBar';

const TABS = ['new', 'submit', 'account'];

class MainView extends Component {
  state = {
    currentTab: TABS[0]
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Hacker News</Text>
        <LinkListPage />
        <BottomBar tabs={TABS} onPress={this._setCurrentTab} />
      </SafeAreaView>
    );
  }

  _setCurrentTab = (tab) => {
    this.setState({ currentTab: tab });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_BG_GRAY,
  },
  header: {
    fontSize: 24,
    padding: 10,
    backgroundColor: COLOR_ORANGE,
    fontFamily: 'Verdana',
  },
});

export default MainView;
