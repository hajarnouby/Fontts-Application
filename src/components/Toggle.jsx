import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { C } from '../styles/colors';

export default function Toggle({ value, onToggle, color = C.success }) {
  return (
    <TouchableOpacity
      style={[ss.tbg, { backgroundColor: value ? color : C.bdrSub }]}
      onPress={onToggle}
      activeOpacity={0.8}
    >
      <View style={[ss.tknob, value ? ss.tknobon : ss.tknoboff]} />
    </TouchableOpacity>
  );
}

const ss = StyleSheet.create({
  tbg:     { width: 44, height: 24, borderRadius: 12,
             justifyContent: 'center', paddingHorizontal: 2 },
  tknob:   { width: 20, height: 20, borderRadius: 10,
             backgroundColor: C.white },
  tknoboff: { alignSelf: 'flex-start' },
  tknobon:  { alignSelf: 'flex-end' },
});
