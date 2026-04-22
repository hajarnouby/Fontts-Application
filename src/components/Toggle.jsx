import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { C } from '../styles/colors';

export default function Toggle({ value, onToggle, color }) {
  const trackColor = color || C.primary;

  return (
    <TouchableOpacity
      style={[
        ss.togwrap,
        value ? [ss.togon, { backgroundColor: trackColor }] : ss.togoff,
      ]}
      onPress={onToggle}
      activeOpacity={0.75}
    >
      <View style={ss.togcir} />
    </TouchableOpacity>
  );
}

const ss = StyleSheet.create({
  togwrap: { width: 51, height: 31, borderRadius: 100,
             justifyContent: 'center', padding: 2 },
  togon:   { backgroundColor: C.primary, alignItems: 'flex-end' },
  togoff:  { backgroundColor: 'rgba(245,245,245,0.15)',
             alignItems: 'flex-start' },
  togcir:  { width: 27, height: 27, borderRadius: 100,
             backgroundColor: '#FFFFFF' },
});
