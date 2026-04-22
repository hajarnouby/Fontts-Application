import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { C } from '../styles/colors';
import { T } from '../styles/typography';
import { S } from '../styles/spacing';
import Avatar from './Avatar';
import Badge from './Badge';

export default function BidReviewCard({
  designerName, amount, timeline, pitch, rating, onAccept, onReject,
}) {
  return (
    <View style={ss.cbrev}>
      <View style={ss.cbrevtop}>
        <Avatar size="sm" name={designerName} />
        <View style={ss.cbrevinfo}>
          <Text style={ss.cbrevname}>{designerName}</Text>
          <Badge label={`★ ${rating || '4.8'}`} color={C.warning} />
        </View>
      </View>
      <View style={ss.cbrevrow}>
        <View style={ss.cbrevcol}>
          <Text style={ss.cbrevlbl}>Amount</Text>
          <Text style={ss.cbrevval}>${amount}</Text>
        </View>
        <View style={ss.cbrevcol}>
          <Text style={ss.cbrevlbl}>Timeline</Text>
          <Text style={ss.cbrevval}>{timeline}</Text>
        </View>
      </View>
      {pitch ? <Text style={ss.cbrevpitch} numberOfLines={3}>{pitch}</Text> : null}
      <View style={ss.cbrevbtns}>
        <TouchableOpacity style={ss.cbrevrej} onPress={onReject} activeOpacity={0.75}>
          <Text style={ss.cbrevrjtxt}>Decline</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ss.cbrevacc} onPress={onAccept} activeOpacity={0.75}>
          <Text style={ss.cbrevactxt}>Accept</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const ss = StyleSheet.create({
  cbrev:     { backgroundColor: C.card, borderRadius: S.cardR,
               padding: S.cardPad, marginBottom: 12, borderWidth: 1,
               borderColor: C.bdrSub },
  cbrevtop:  { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  cbrevinfo: { flex: 1, marginLeft: 12, flexDirection: 'row',
               alignItems: 'center', justifyContent: 'space-between' },
  cbrevname: { ...T.P, fontFamily: 'Poppins-SemiBold' },
  cbrevrow:  { flexDirection: 'row', gap: S.secGap, marginBottom: 10 },
  cbrevcol:  { flex: 1 },
  cbrevlbl:  { ...T.cap, marginBottom: 2 },
  cbrevval:  { ...T.P, fontFamily: 'Poppins-SemiBold' },
  cbrevpitch: { ...T.cap, marginBottom: 12 },
  cbrevbtns: { flexDirection: 'row', gap: 10 },
  cbrevrej:  { flex: 1, borderWidth: 1, borderColor: C.white20,
               borderRadius: S.btnR, height: 38,
               alignItems: 'center', justifyContent: 'center' },
  cbrevrjtxt: { ...T.btn, fontSize: 12, color: C.textSec },
  cbrevacc:  { flex: 1, backgroundColor: C.primary,
               borderRadius: S.btnR, height: 38,
               alignItems: 'center', justifyContent: 'center' },
  cbrevactxt: { ...T.btn, fontSize: 12 },
});
