import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTabBar from './BottomTabBar';

import ClientHomeScreen from '../pages/ClientHomeScreen';
import PostBriefScreen from '../pages/PostBriefScreen';
import IncomingBidsScreen from '../pages/IncomingBidsScreen';
import UrgentWorkScreen from '../pages/UrgentWorkScreen';
import ClientWorkspaceScreen from '../pages/ClientWorkspaceScreen';
import ProfileScreen from '../pages/ProfileScreen';

const Tab = createBottomTabNavigator();
const JobsStack = createNativeStackNavigator();
const ProjectsStack = createNativeStackNavigator();

function ClientJobsStack() {
  return (
    <JobsStack.Navigator screenOptions={{ headerShown: false }}>
      <JobsStack.Screen name="PostBrief" component={PostBriefScreen} />
      <JobsStack.Screen name="IncomingBids" component={IncomingBidsScreen} />
    </JobsStack.Navigator>
  );
}

function ClientProjectsStack() {
  return (
    <ProjectsStack.Navigator screenOptions={{ headerShown: false }}>
      <ProjectsStack.Screen name="ClientWorkspace" component={ClientWorkspaceScreen} />
    </ProjectsStack.Navigator>
  );
}

export default function ClientTabNavigator() {
  return (
    <Tab.Navigator
      tabBar={(props) => <BottomTabBar {...props} userType="client" />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={ClientHomeScreen} />
      <Tab.Screen name="Jobs" component={ClientJobsStack} />
      <Tab.Screen name="Projects" component={ClientProjectsStack} />
      <Tab.Screen name="Urgent" component={UrgentWorkScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
