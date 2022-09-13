/**
 * Created by yuanzhou.xu on 2018/5/16.
 * Update by joaogabrieljunq on 2022/04/14
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class ControlBtn extends Component {
  render() {
    let {
      isFull,
      onFullPress
    } = this.props;

    return (
      <View style={[styles.controls]}>
        <View style={styles.controlContainer}>
          <TouchableOpacity style={styles.controlContent} activeOpacity={1}>
            <View style={styles.fullScreenButton}>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => {
                  onFullPress && onFullPress();
                }}
              >
                {isFull ? (
                  <Icon name={'fullscreen-exit'} color="#fff" size={45} style={{left: -20}}/>
                ) : (
                  <Icon name={'fullscreen'} size={40} color="#fff" />
                )}
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  controls: {
    width: '100%',
    height: 50,
  },
  controlContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlContent: {
    width: '100%',
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  fullScreenButton: {
    alignSelf:'flex-end',
    backgroundColor: 'rgba(0,0,0,0.3)',
    flex: 1,
    flexDirection: 'row'
  }
});
