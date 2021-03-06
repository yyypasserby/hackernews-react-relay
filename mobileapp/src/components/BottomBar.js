import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Link } from 'react-router-native';

import {
  COLOR_ORANGE_PRIMARY,
  COLOR_ORANGE_SECONDARY,
  FONT_PRIMARY,
} from '../constants';

class BottomBar extends Component {
  render() {
  return (
      <View style={styles.bottomBar}>
        {this.props.tabs.map((tab, index) =>
          <Link
            key={index}
            style={styles.bottomBarButton}
            to={tab.path}
            underlayColor={COLOR_ORANGE_SECONDARY}>
            <Text style={styles.text}>{tab.name}</Text>
          </Link>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bottomBar: {
    backgroundColor: COLOR_ORANGE_PRIMARY,
    height: 48,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  bottomBarButton: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: FONT_PRIMARY,
    fontFamily: 'Verdana',
  },
});

export default BottomBar;
