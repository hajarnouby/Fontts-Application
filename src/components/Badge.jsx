import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { C } from '../styles/styles';

export default function Badge({ label, color = C.primary }) {
  const bgColor = color === C.primary ? C.purpleA
    : color === C.success ? C.greenA
    : color === C.warning ? C.amberA
    : color === C.error ? C.redA
    : C.purpleA;

  return (
    <View style={[ss.pillact, { backgroundColor: bgColor }]}>
      <Text style={[ss.pilltxt, { color }]}>{label}</Text>
    </View>
  );
}

const ss = StyleSheet.create({
  pillact: { borderRadius: 100, paddingHorizontal: 10,
             paddingVertical: 4, alignSelf: 'flex-start' },
  pilltxt: { fontFamily: 'Poppins-SemiBold', fontSize: 11 },
});
