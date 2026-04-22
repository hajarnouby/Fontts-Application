import React from 'react';
import { StatusBar as RNStatusBar } from 'react-native';
import { C } from '../styles/colors';

export default function StatusBar() {
  return (
    <RNStatusBar
      barStyle="light-content"
      backgroundColor={C.bg}
      translucent={false}
    />
  );
}
