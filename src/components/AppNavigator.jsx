import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import DesignerTabNavigator from './DesignerTabNavigator';
import ClientTabNavigator from './ClientTabNavigator';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Auth" component={AuthNavigator} />
        <Stack.Screen name="DesignerTabs" component={DesignerTabNavigator} />
        <Stack.Screen name="ClientTabs" component={ClientTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
