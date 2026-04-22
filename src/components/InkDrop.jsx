import React from 'react';
import { View, StyleSheet } from 'react-native';
import { C } from '../styles/colors';

export default function InkDrop({ size = 120, opacity = 0.06, style }) {
  return (
    <View
      style={[
        ss.inkdrop,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          opacity,
        },
        style,
      ]}
    />
  );
}

const ss = StyleSheet.create({
  inkdrop: { backgroundColor: C.primary, position: 'absolute' },
});
