import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { C, S } from '../styles/styles';
import { getInitials } from '../utils/helpers';

const SIZES = { lg: 72, md: 48, sm: 36 };

export default function Avatar({
  size = 'md', ring, ringColor, source, name,
}) {
  const dim = SIZES[size] || SIZES.md;
  const sizeStyle = { width: dim, height: dim, borderRadius: S.avR };
  const ringStyle = ring
    ? { padding: 2, borderRadius: S.avR, borderWidth: 2,
        borderColor: ringColor || C.primary }
    : null;

  return (
    <View style={[ss.avring, ringStyle]}>
      {source ? (
        <Image source={source} style={[ss.avbase, sizeStyle]} />
      ) : (
        <View style={[ss.avplaceholder, sizeStyle]}>
          <Text style={ss.avtext}>{getInitials(name)}</Text>
        </View>
      )}
    </View>
  );
}

const ss = StyleSheet.create({
  avring:       { borderRadius: S.avR },
  avbase:       { borderRadius: S.avR },
  avplaceholder: { backgroundColor: C.purpleA,
                   alignItems: 'center', justifyContent: 'center' },
  avtext:       { fontFamily: 'Poppins-SemiBold', fontSize: 14,
                  color: C.primary },
});
