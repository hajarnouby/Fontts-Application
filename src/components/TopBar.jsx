import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { C } from '../styles/colors';
import { T } from '../styles/typography';
import { S } from '../styles/spacing';
import { Ionicons } from '@expo/vector-icons';

export default function TopBar({
  title, onLeft, onRight, rightIcon, leftIcon = 'chevron-back',
}) {
  return (
    <View style={ss.cbar}>
      <View style={ss.cside}>
        {onLeft && (
          <TouchableOpacity style={ss.cbtn} onPress={onLeft}>
            <Ionicons name={leftIcon} size={24} color={C.textPr} />
          </TouchableOpacity>
        )}
      </View>
      <View style={ss.cmid}>
        <Text style={ss.ctit} numberOfLines={1}>{title}</Text>
      </View>
      <View style={ss.csideright}>
        {onRight && rightIcon && (
          <TouchableOpacity style={ss.cbtn} onPress={onRight}>
            <Ionicons name={rightIcon} size={22} color={C.textPr} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const ss = StyleSheet.create({
  cbar:  { flexDirection: 'row', alignItems: 'center',
           height: S.headerH, paddingHorizontal: S.pagePad,
           backgroundColor: C.bg },
  cside: { width: 40, alignItems: 'flex-start', justifyContent: 'center' },
  csideright: { width: 40, alignItems: 'flex-end', justifyContent: 'center' },
  cmid:  { flex: 1, alignItems: 'center', justifyContent: 'center' },
  ctit:  { ...T.H4, fontSize: 16 },
  cbtn:  { width: 40, height: 40, alignItems: 'center', justifyContent: 'center' },
});
