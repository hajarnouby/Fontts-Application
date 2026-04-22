import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { C } from '../styles/colors';
import { T } from '../styles/typography';
import { S } from '../styles/spacing';
import { CHECKPOINT_STATUS } from '../constants';

export default function CheckpointTimeline({ checkpoints = [] }) {
  return (
    <View style={ss.cpwrap}>
      {checkpoints.map((cp, i) => {
        const isDone = cp.status === CHECKPOINT_STATUS.DONE;
        const isActive = cp.status === CHECKPOINT_STATUS.ACTIVE;
        const isLast = i === checkpoints.length - 1;

        return (
          <View key={cp.id || i} style={ss.cprow}>
            <View style={ss.cpnodecol}>
              <View style={[
                ss.cpnode,
                isDone && ss.cpnodedone,
                isActive && ss.cpnodeact,
                !isDone && !isActive && ss.cpnodeup,
              ]} />
              {!isLast && <View style={[ss.cpline,
                isDone && { backgroundColor: C.success }]} />}
            </View>
            <View style={ss.cpinfo}>
              <Text style={ss.cptname}>{cp.name}</Text>
              {cp.subtitle ? <Text style={ss.cpsub}>{cp.subtitle}</Text> : null}
            </View>
            <View style={[ss.cppill,
              { backgroundColor: isDone ? C.greenA : isActive ? C.purpleA : C.white10 }]}>
              <Text style={[ss.cpptxt,
                { color: isDone ? C.success : isActive ? C.primary : C.textMut }]}>
                {cp.status}
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
}

const ss = StyleSheet.create({
  cpwrap:     { paddingVertical: 4 },
  cprow:      { flexDirection: 'row', alignItems: 'flex-start', minHeight: 48 },
  cpnodecol:  { alignItems: 'center', width: 24 },
  cpnode:     { width: 12, height: 12, borderRadius: 6 },
  cpnodedone: { backgroundColor: C.success },
  cpnodeact:  { backgroundColor: C.primary },
  cpnodeup:   { borderWidth: 2, borderColor: C.white20, backgroundColor: 'transparent' },
  cpline:     { width: 2, flex: 1, backgroundColor: C.white10, marginVertical: 4 },
  cpinfo:     { flex: 1, marginLeft: 12, paddingBottom: 16 },
  cptname:    { ...T.P, fontFamily: 'Poppins-Medium' },
  cpsub:      { ...T.cap, marginTop: 2 },
  cppill:     { borderRadius: 100, paddingHorizontal: 8, paddingVertical: 2 },
  cpptxt:     { fontFamily: 'Poppins-Medium', fontSize: 10 },
});
