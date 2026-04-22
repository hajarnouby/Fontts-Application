import { StyleSheet } from 'react-native';
import { C } from './colors';

export const T = StyleSheet.create({
  H1:  { fontFamily: 'Poppins-Bold',       fontSize: 40, color: C.textPr },
  H2:  { fontFamily: 'Poppins-Bold',       fontSize: 28, color: C.textPr },
  H3:  { fontFamily: 'Poppins-SemiBold',   fontSize: 22, color: C.textPr },
  H4:  { fontFamily: 'Poppins-SemiBold',   fontSize: 18, color: C.textPr },
  P:   { fontFamily: 'Poppins-Regular',    fontSize: 14, color: C.textPr },
  lbl: { fontFamily: 'Poppins-Medium',     fontSize: 12, color: C.textSec },
  btn: { fontFamily: 'Poppins-SemiBold',   fontSize: 14, color: C.textPr },
  tab: { fontFamily: 'Poppins-Medium',     fontSize: 11 },
  cap: { fontFamily: 'Poppins-Regular',    fontSize: 11, color: C.textSec },
});
