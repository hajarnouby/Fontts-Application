import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/components/AppNavigator';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';
import './src/styles/styles.css';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': Poppins_400Regular,
    'Poppins-Medium': Poppins_500Medium,
    'Poppins-SemiBold': Poppins_600SemiBold,
    'Poppins-Bold': Poppins_700Bold,
  });

  if (!fontsLoaded) return null;

  return (
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  );
}
