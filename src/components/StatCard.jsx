import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { C } from '../styles/colors';
import { T } from '../styles/typography';
import { S } from '../styles/spacing';
import { Ionicons } from '@expo/vector-icons';

export default function StatCard({ icon, label, value, color, bg }) {
  return (
    <View style={ss.cstat}>
      <View style={[ss.cstatico, { backgroundColor: bg || C.purpleA }]}>
        <Ionicons name={icon} size={20} color={color || C.primary} />
      </View>
      <Text style={ss.cstatval}>{value}</Text>
      <Text style={ss.cstatlbl}>{label}</Text>
    </View>
  );
}

const ss = StyleSheet.create({
  cstat:    { flex: 1, backgroundColor: C.card,
              borderRadius: S.cardR, padding: S.cardPad,
              borderWidth: 1, borderColor: C.bdrSub },
  cstatico: { width: 36, height: 36, borderRadius: 10,
              alignItems: 'center', justifyContent: 'center',
              marginBottom: 12 },
  cstatval: { ...T.H3, marginBottom: 4 },
  cstatlbl: { ...T.cap },
});
