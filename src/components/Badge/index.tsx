import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Badge() {
  return (
    <View style={styles.badgeContainer}>
      <Text style={styles.badgeTitle}>10% off</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badgeContainer: {
    backgroundColor: '#E9F7EC',
    position: 'absolute',
    top: 10,
    right: 10,
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  badgeTitle: {
    fontSize: 12,
    color: '#1EAB3D',
    fontFamily: 'Manrope-Bold',
  },
});
