import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { C } from '../styles/colors';
import { T } from '../styles/typography';
import { S } from '../styles/spacing';
import Avatar from './Avatar';
import Badge from './Badge';

export default function BriefCard({
  title, company, budget, expiry, tags = [], rating, onPress, onBid,
}) {
  return (
    <TouchableOpacity style={ss.cbrief} onPress={onPress} activeOpacity={0.75}>
      <View style={ss.cbrieftop}>
        <Avatar size="sm" name={company} />
        <View style={ss.cbriefinfo}>
          <View style={ss.cbriefhead}>
            <Text style={ss.cbriefco}>{company}</Text>
            {rating ? <Badge label={`★ ${rating}`} color={C.warning} /> : null}
          </View>
          <Text style={ss.cbrieftit} numberOfLines={2}>{title}</Text>
        </View>
      </View>

      <View style={ss.cbrieftags}>
        {tags.slice(0, 3).map((tag, i) => (
          <View key={i} style={ss.ctag}>
            <Text style={ss.ctagtxt}>{tag}</Text>
          </View>
        ))}
      </View>

      <View style={ss.cbriefbot}>
        <Badge label={budget} color={C.primary} />
        <View style={ss.cbriefexp}>
          <Text style={ss.cexptxt}>{expiry}</Text>
        </View>
        {onBid ? (
          <TouchableOpacity style={ss.cbidbtn} onPress={onBid} activeOpacity={0.75}>
            <Text style={ss.cbidtxt}>Bid</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </TouchableOpacity>
  );
}

const ss = StyleSheet.create({
  cbrief:    { backgroundColor: C.card, borderRadius: S.cardR,
               padding: S.cardPad, marginBottom: 12, borderWidth: 1,
               borderColor: C.bdrSub },
  cbrieftop: { flexDirection: 'row', marginBottom: 12 },
  cbriefinfo: { flex: 1, marginLeft: 12 },
  cbriefhead: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  cbriefco:  { ...T.lbl, marginBottom: 2 },
  cbrieftit: { ...T.H4, fontSize: 15 },
  cbrieftags: { flexDirection: 'row', flexWrap: 'wrap', gap: 6,
                marginBottom: 12 },
  ctag:      { backgroundColor: C.purpleC, borderRadius: 6,
               paddingHorizontal: 8, paddingVertical: 3 },
  ctagtxt:   { ...T.cap, color: C.primary, fontSize: 11 },
  cbriefbot: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  cbriefexp: { flex: 1 },
  cexptxt:   { ...T.cap, color: C.warning },
  cbidbtn:   { backgroundColor: C.primary, borderRadius: S.btnR,
               paddingHorizontal: 16, paddingVertical: 6 },
  cbidtxt:   { ...T.btn, fontSize: 12 },
});
