import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { C, T, S } from '../styles/styles';
import Avatar from './Avatar';
import Badge from './Badge';

export default function ProjectCard({
  title, client, status, progress, checkpoint, onPress,
}) {
  const statusColor = status === 'active' ? C.success
    : status === 'completed' ? C.primary
    : status === 'in_review' ? C.warning : C.textSec;

  return (
    <TouchableOpacity style={ss.cproj} onPress={onPress} activeOpacity={0.75}>
      <View style={ss.cprojtop}>
        <Avatar size="sm" name={client} />
        <View style={ss.cprojinfo}>
          <Text style={ss.cprojcl}>{client}</Text>
          <Text style={ss.cprojtit} numberOfLines={1}>{title}</Text>
        </View>
        <Badge label={status} color={statusColor} />
      </View>
      <View style={ss.cprojmid}>
        <View style={ss.cprogrow}>
          <Text style={ss.cprojlbl}>Progress</Text>
          <Text style={ss.cprojval}>{progress || 0}%</Text>
        </View>
        <View style={ss.cprogbar}>
          <View style={[ss.cprogfill, { width: `${progress || 0}%` }]} />
        </View>
      </View>
      {checkpoint ? (
        <View style={ss.cprojbot}>
          <Text style={ss.cprojlbl}>Current:</Text>
          <Text style={ss.cprojcp}>{checkpoint}</Text>
        </View>
      ) : null}
    </TouchableOpacity>
  );
}

const ss = StyleSheet.create({
  cproj:     { backgroundColor: C.card, borderRadius: S.cardR,
               padding: S.cardPad, marginBottom: 12, borderWidth: 1,
               borderColor: C.bdrSub },
  cprojtop:  { flexDirection: 'row', alignItems: 'center', marginBottom: 14 },
  cprojinfo: { flex: 1, marginLeft: 12, marginRight: 8 },
  cprojcl:   { ...T.cap, marginBottom: 2 },
  cprojtit:  { ...T.P, fontFamily: 'Poppins-SemiBold' },
  cprojmid:  { marginBottom: 12 },
  cprogrow:  { flexDirection: 'row', justifyContent: 'space-between',
               marginBottom: 6 },
  cprojlbl:  { ...T.cap },
  cprojval:  { ...T.cap, color: C.primary, fontFamily: 'Poppins-Medium' },
  cprogbar:  { height: 6, backgroundColor: C.purpleC, borderRadius: 100 },
  cprogfill: { height: 6, backgroundColor: C.primary, borderRadius: 100 },
  cprojbot:  { flexDirection: 'row', alignItems: 'center', gap: 6 },
  cprojcp:   { ...T.cap, color: C.textPr, fontFamily: 'Poppins-Medium' },
});
