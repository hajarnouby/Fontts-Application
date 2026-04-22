import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { C, T, S } from '../styles/styles';
import { Ionicons } from '@expo/vector-icons';

export default function AppInput({
  placeholder, value, onChangeText, icon,
  secureTextEntry, multiline, numberOfLines, keyboardType,
}) {
  const [focused, setFocused] = useState(false);

  return (
    <View style={[ss.inpdef, focused && ss.inpfoc]}>
      {icon ? (
        <Ionicons
          name={icon}
          size={20}
          color={focused ? C.primary : C.textMut}
          style={ss.inpico}
        />
      ) : null}
      <TextInput
        style={[ss.inptxt, multiline && ss.inpmulti]}
        placeholder={placeholder}
        placeholderTextColor={C.textMut}
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        secureTextEntry={secureTextEntry}
        multiline={multiline}
        numberOfLines={numberOfLines}
        keyboardType={keyboardType}
      />
    </View>
  );
}

const ss = StyleSheet.create({
  inpdef: { flexDirection: 'row', alignItems: 'center',
            backgroundColor: C.card, borderRadius: S.inputR,
            borderWidth: 1, borderColor: C.bdrSub,
            height: S.itemH, paddingHorizontal: S.pagePad },
  inpfoc: { borderColor: C.bdrAct },
  inptxt: { ...T.P, flex: 1, color: C.textPr },
  inpico: { marginRight: 10 },
  inpmulti: { height: 100, textAlignVertical: 'top', paddingTop: 12 },
});
