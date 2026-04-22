import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { C } from '../styles/colors';
import { T } from '../styles/typography';

export default function FilterPill({ label, active, onPress }) {
  return (
    <TouchableOpacity
      style={[ss.pillbase, active && ss.pillact]}
      onPress={onPress}
      activeOpacity={0.75}
    >
      <Text style={[ss.pilltxt, active && ss.pilltxtact]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const ss = StyleSheet.create({
  pillbase: { paddingHorizontal: 16, paddingVertical: 8,
              borderRadius: 100, backgroundColor: C.card,
              borderWidth: 1, borderColor: C.bdrSub },
  pillact:  { backgroundColor: C.primary, borderColor: C.primary },
  pilltxt:  { ...T.cap, color: C.textPr },
  pilltxtact: { color: C.textPr, fontFamily: 'Poppins-Medium' },
});
