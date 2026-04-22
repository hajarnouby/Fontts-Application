import React from 'react';
import { View, StyleSheet } from 'react-native';
import { C, S } from '../styles/styles';

export default function Card({
  children, elevated, bordered, style, className,
}) {
  return (
    <View
      className={className}
      style={[
        elevated ? ss.cel : ss.cbase,
        bordered && ss.cbdr,
        style,
      ]}
    >
      {children}
    </View>
  );
}

const ss = StyleSheet.create({
  cbase: { backgroundColor: C.card,
           borderRadius: S.cardR,
           padding: S.cardPad },
  cel:   { backgroundColor: C.cardEl,
           borderRadius: S.cardR,
           padding: S.cardPad },
  cbdr:  { borderWidth: 1,
           borderColor: C.bdrSub },
});
