import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { C, T, S } from '../styles/styles';

export default function AppButton({
  label, variant = 'fill', onPress, fullWidth, size,
}) {
  const base = variant === 'fill' ? ss.btnfill : ss.btnout;
  const txtStyle = variant === 'fill'
    ? ss.btntxt
    : [ss.btntxt, { color: C.textPr }];

  return (
    <TouchableOpacity
      style={[
        base,
        fullWidth && ss.btnfw,
        size === 'sm' && ss.btnsm,
      ]}
      onPress={onPress}
      activeOpacity={0.75}
    >
      <Text style={txtStyle}>{label}</Text>
    </TouchableOpacity>
  );
}

const ss = StyleSheet.create({
  btnfill: { backgroundColor: C.primary,
             borderRadius: S.btnR, height: S.btnH,
             alignItems: 'center', justifyContent: 'center',
             paddingHorizontal: S.cardPad },
  btnout:  { borderWidth: 1,
             borderColor: C.white20,
             borderRadius: S.btnR, height: S.btnH,
             alignItems: 'center', justifyContent: 'center',
             paddingHorizontal: S.cardPad },
  btntxt:  { ...T.btn, color: C.textPr },
  btnfw:   { width: '100%' },
  btnsm:   { height: 36, paddingHorizontal: S.pagePad },
});
