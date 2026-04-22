import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { C, T, S } from '../styles/styles';
import { Ionicons } from '@expo/vector-icons';

const DESIGNER_TABS = [
  { name: 'Home',     icon: 'home',        iconOut: 'home-outline' },
  { name: 'Jobs',     icon: 'briefcase',   iconOut: 'briefcase-outline' },
  { name: 'Projects', icon: 'folder',      iconOut: 'folder-outline' },
  { name: 'SkillHub', icon: 'school',      iconOut: 'school-outline' },
  { name: 'Profile',  icon: 'person',      iconOut: 'person-outline' },
];

const CLIENT_TABS = [
  { name: 'Home',     icon: 'home',        iconOut: 'home-outline' },
  { name: 'Jobs',     icon: 'briefcase',   iconOut: 'briefcase-outline' },
  { name: 'Projects', icon: 'folder',      iconOut: 'folder-outline' },
  { name: 'Urgent',   icon: 'flash',       iconOut: 'flash-outline' },
  { name: 'Profile',  icon: 'person',      iconOut: 'person-outline' },
];

export default function BottomTabBar({
  state, descriptors, navigation, userType = 'designer',
}) {
  const tabs = userType === 'client' ? CLIENT_TABS : DESIGNER_TABS;

  return (
    <View style={ss.barbot}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const tabMeta = tabs[index] || tabs[0];

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress', target: route.key, canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            style={ss.tabitem}
            onPress={onPress}
            activeOpacity={0.75}
          >
            {isFocused && <View style={ss.tabline} />}
            <Ionicons
              name={isFocused ? tabMeta.icon : tabMeta.iconOut}
              size={22}
              color={isFocused ? C.primary : 'rgba(245,245,245,0.35)'}
            />
            <Text
              style={[
                T.tab,
                isFocused ? ss.tabact : ss.tabidle,
              ]}
            >
              {tabMeta.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const ss = StyleSheet.create({
  barbot:  { height: S.tabBarH, backgroundColor: C.card,
             borderTopWidth: 1, borderTopColor: C.bdrSub,
             flexDirection: 'row', alignItems: 'center' },
  tabitem: { flex: 1, alignItems: 'center',
             justifyContent: 'center', gap: 4 },
  tabact:  { color: C.primary },
  tabidle: { color: 'rgba(245,245,245,0.35)' },
  tabline: { position: 'absolute', top: 0,
             height: 2, width: 24,
             backgroundColor: C.primary, borderRadius: 100 },
});
