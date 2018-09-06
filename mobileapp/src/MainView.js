import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { Route } from 'react-router-native';

import {
  COLOR_ORANGE_PRIMARY,
  COLOR_BG_GRAY,
  FONT_PRIMARY,
} from './constants';

import AccountView from './components/AccountView';
import BottomBar from  './components/BottomBar';
import CreateLinkView from './components/CreateLinkView';
import LinkListView from './components/LinkListView';

const TABS = [{
  name: 'new',
  path: '/'
}, {
  name: 'submit',
  path: '/submit'
}, {
  name: 'account',
  path: '/account'
}];

class MainView extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Hacker News</Text>
        <FlashMessage position='top' />
        <View style={styles.tabView}>
          <Route exact path={TABS[0].path} component={LinkListView} />
          <Route path={TABS[1].path} component={CreateLinkView} />
          <Route path={TABS[2].path} component={AccountView} />
        </View>
        <BottomBar tabs={TABS} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR_BG_GRAY,
    flex: 1,
  },
  header: {
    backgroundColor: COLOR_ORANGE_PRIMARY,
    fontFamily: 'Verdana',
    fontSize: 24,
    padding: 10,
  },
  tabView: {
    flex: 1,
  }
});

export default MainView;
