import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { C, T } from '../styles/styles';
import { Ionicons } from '@expo/vector-icons';

export default function FileRow({ filename, type, size, version, onDownload }) {
  const isImage = type === 'image';
  const isPdf = type === 'pdf';
  const isFigma = type === 'figma';

  const iconName = isImage ? 'image' : isPdf ? 'document-text' : isFigma ? 'logo-figma' : 'document';
  const iconColor = isImage ? C.success : isPdf ? C.error : isFigma ? C.primary : C.textSec;

  return (
    <View style={ss.cfilerow}>
      <View style={[ss.cfileico, { backgroundColor: iconColor + '18' }]}>
        <Ionicons name={iconName} size={20} color={iconColor} />
      </View>
      <View style={ss.cfileinfo}>
        <Text style={ss.cfiletit} numberOfLines={1}>{filename}</Text>
        <Text style={ss.cfilemeta}>v{version} · {size}</Text>
      </View>
      <TouchableOpacity style={ss.cdownbtn} onPress={onDownload} activeOpacity={0.75}>
        <Ionicons name="download-outline" size={18} color={C.textSec} />
      </TouchableOpacity>
    </View>
  );
}

const ss = StyleSheet.create({
  cfilerow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 10 },
  cfileico: { width: 40, height: 40, borderRadius: 10,
              alignItems: 'center', justifyContent: 'center' },
  cfileinfo: { flex: 1, marginLeft: 12 },
  cfiletit: { ...T.P, fontFamily: 'Poppins-Medium', marginBottom: 2 },
  cfilemeta: { ...T.cap },
  cdownbtn: { padding: 8 },
});
