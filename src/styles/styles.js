import { StyleSheet } from 'react-native';

/* ── Colors ── */
export const C = {
  bg:       '#0B071F',
  card:     '#130E28',
  cardEl:   '#1A1035',
  primary:  '#A020F0',
  accent:   '#FE0149',
  textPr:   '#F5F5F5',
  textSec:  'rgba(245,245,245,0.5)',
  textMut:  'rgba(245,245,245,0.3)',
  bdrSub:   'rgba(160,32,240,0.2)',
  bdrAct:   '#A020F0',
  success:  '#22C55E',
  warning:  '#F59E0B',
  error:    '#FE0149',
  purpleA:  'rgba(160,32,240,0.12)',
  purpleB:  'rgba(160,32,240,0.1)',
  purpleC:  'rgba(160,32,240,0.06)',
  greenA:   'rgba(34,197,94,0.12)',
  greenB:   'rgba(34,197,94,0.1)',
  amberA:   'rgba(245,158,11,0.12)',
  amberB:   'rgba(245,158,11,0.08)',
  redA:     'rgba(254,1,73,0.12)',
  redB:     'rgba(254,1,73,0.1)',
  divider:  'rgba(245,245,245,0.06)',
  white10:  'rgba(245,245,245,0.1)',
  white20:  'rgba(245,245,245,0.2)',
};

/* ── Spacing ── */
export const S = {
  pagePad:  16,
  secGap:   20,
  cardPad:  20,
  cardR:    16,
  btnR:     100,
  pillR:    100,
  inputR:   12,
  avR:      999,
  itemH:    56,
  btnH:     52,
  topBarH:  56,
  statBarH: 44,
  tabBarH:  80,
};

/* ── Typography ── */
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

/* ── Global Layouts ── */
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
