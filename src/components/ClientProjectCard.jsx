import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { C } from '../styles/colors';
import { T } from '../styles/typography';
import { S } from '../styles/spacing';
import Badge from './Badge';

export default function ClientProjectCard({
  title, designer, status, progress, bidsCount, onPress,
}) {
  const statusColor = status === 'active' ? C.success
    : status === 'in_review' ? C.warning : C.textSec;

  return (
    <TouchableOpacity style={ss.cclproj} onPress={onPress} activeOpacity={0.75}>
      <View style={ss.cclprojtop}>
        <Text style={ss.cclprojtit} numberOfLines={1}>{title}</Text>
        <Badge label={status} color={statusColor} />
      </View>
      {designer ? (
        <Text style={ss.cclprojdes}>Designer: {designer}</Text>
      ) : (
        <Text style={ss.cclprojbids}>{bidsCount || 0} bids received</Text>
      )}
      <View style={ss.cclprogrow}>
        <View style={ss.cclprogbar}>
          <View style={[ss.cclprogfill, { width: `${progress || 0}%` }]} />
        </View>
        <Text style={ss.cclproglbl}>{progress || 0}%</Text>
      </View>
    </TouchableOpacity>
  );
}

const ss = StyleSheet.create({
  cclproj:    { backgroundColor: C.card, borderRadius: S.cardR,
                padding: S.cardPad, marginBottom: 12, borderWidth: 1,
                borderColor: C.bdrSub },
  cclprojtop: { flexDirection: 'row', alignItems: 'center',
                justifyContent: 'space-between', marginBottom: 8 },
  cclprojtit: { ...T.P, fontFamily: 'Poppins-SemiBold', flex: 1, marginRight: 8 },
  cclprojdes: { ...T.cap, marginBottom: 10 },
  cclprojbids: { ...T.cap, color: C.primary, marginBottom: 10 },
  cclprogrow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  cclprogbar: { flex: 1, height: 4, backgroundColor: C.purpleC,
                borderRadius: 100 },
  cclprogfill: { height: 4, backgroundColor: C.primary, borderRadius: 100 },
  cclproglbl: { ...T.cap, color: C.primary, width: 32, textAlign: 'right' },
});
