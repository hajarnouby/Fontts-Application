import { StyleSheet } from 'react-native';
import { C } from './colors';
import { S } from './spacing';

export const G = StyleSheet.create({
  wrapscr: {
    flex: 1,
    backgroundColor: C.bg,
  },
  scrl: {
    flex: 1,
  },
  scrlcon: {
    paddingHorizontal: S.pagePad,
    paddingBottom: 40,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
