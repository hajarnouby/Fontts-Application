import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { C } from '../styles/colors';
import { T } from '../styles/typography';
import { S } from '../styles/spacing';
import Avatar from './Avatar';

export default function BidCard({ amount, timeline, status, brief, currency = 'USD' }) {
  const statusColor = status === 'accepted' ? C.success
    : status === 'pending' ? C.warning : C.error;

  return (
    <View style={ss.cbid}>
      <View style={ss.cbidtop}>
        <Text style={ss.cbidtit} numberOfLines={1}>{brief}</Text>
        <View style={[ss.cbidstat, { backgroundColor: statusColor + '18' }]}>
          <Text style={[ss.cbidstxt, { color: statusColor }]}>{status}</Text>
        </View>
      </View>
      <View style={ss.cbidbot}>
        <View style={ss.cbidcol}>
          <Text style={ss.cbidlbl}>Amount</Text>
          <Text style={ss.cbidval}>{currency} {amount}</Text>
        </View>
        <View style={ss.cbidcol}>
          <Text style={ss.cbidlbl}>Timeline</Text>
          <Text style={ss.cbidval}>{timeline}</Text>
        </View>
      </View>
    </View>
  );
}

const ss = StyleSheet.create({
  cbid:     { backgroundColor: C.card, borderRadius: S.cardR,
              padding: S.cardPad, marginBottom: 12, borderWidth: 1,
              borderColor: C.bdrSub },
  cbidtop:  { flexDirection: 'row', alignItems: 'center',
              justifyContent: 'space-between', marginBottom: 12 },
  cbidtit:  { ...T.P, fontFamily: 'Poppins-SemiBold', flex: 1, marginRight: 8 },
  cbidstat: { borderRadius: 100, paddingHorizontal: 10, paddingVertical: 3 },
  cbidstxt: { fontFamily: 'Poppins-SemiBold', fontSize: 11 },
  cbidbot:  { flexDirection: 'row', gap: S.secGap },
  cbidcol:  { flex: 1 },
  cbidlbl:  { ...T.cap, marginBottom: 2 },
  cbidval:  { ...T.P, fontFamily: 'Poppins-SemiBold' },
});
