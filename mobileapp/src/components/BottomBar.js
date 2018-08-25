import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  COLOR_ORANGE,
  FONT_PRIMARY,
} from '../constants';

class BottomBarButton extends Component {
  render() {
    return (
      <TouchableOpacity onPress={() => this.props.onPress(this.props.name)}>
        <Text style={styles.bottomBarButton}>{this.props.name}</Text>
      </TouchableOpacity>
    );
  }
}

class BottomBar extends Component {
  render() {
  return (
      <View style={styles.bottomBar}>
        {this.props.tabs.map((tab, index) =>
          <BottomBarButton key={index} name={tab} onPress={this.props.onPress} />
        )}
      </View>
    );
  }
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
});

export default BottomBar;
