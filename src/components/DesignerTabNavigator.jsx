import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTabBar from './BottomTabBar';

import HomeScreen from '../pages/HomeScreen';
import FindWorkScreen from '../pages/FindWorkScreen';
import UrgentMoneyScreen from '../pages/UrgentMoneyScreen';
import BriefDetailScreen from '../pages/BriefDetailScreen';
import BidSubmitScreen from '../pages/BidSubmitScreen';

import ProjectsScreen from '../pages/ProjectsScreen';
import WorkspaceScreen from '../pages/WorkspaceScreen';
import ArchivedScreen from '../pages/ArchivedScreen';
import CompletedScreen from '../pages/CompletedScreen';
import ReviewFileScreen from '../pages/ReviewFileScreen';

import SkillHubScreen from '../pages/SkillHubScreen';
import ProfileScreen from '../pages/ProfileScreen';
import WalletScreen from '../pages/WalletScreen';
import SettingsScreen from '../pages/SettingsScreen';
import NotificationsScreen from '../pages/NotificationsScreen';
import PortfolioScreen from '../pages/PortfolioScreen';
import ScheduleScreen from '../pages/ScheduleScreen';
import AIScannerScreen from '../pages/AIScannerScreen';
import SmartwatchScreen from '../pages/SmartwatchScreen';
import LanguageScreen from '../pages/LanguageScreen';
import HelpScreen from '../pages/HelpScreen';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const JobsStack = createNativeStackNavigator();
const ProjectsStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

function DesignerHomeStack() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeMain" component={HomeScreen} />
      <HomeStack.Screen name="Urgent" component={UrgentMoneyScreen} />
      <HomeStack.Screen name="BriefDetail" component={BriefDetailScreen} />
      <HomeStack.Screen name="BidSubmit" component={BidSubmitScreen} />
    </HomeStack.Navigator>
  );
}

function DesignerJobsStack() {
  return (
    <JobsStack.Navigator screenOptions={{ headerShown: false }}>
      <JobsStack.Screen name="FindWork" component={FindWorkScreen} />
      <JobsStack.Screen name="BriefDetail" component={BriefDetailScreen} />
      <JobsStack.Screen name="BidSubmit" component={BidSubmitScreen} />
    </JobsStack.Navigator>
  );
}

function DesignerProjectsStack() {
  return (
    <ProjectsStack.Navigator screenOptions={{ headerShown: false }}>
      <ProjectsStack.Screen name="ProjectsList" component={ProjectsScreen} />
      <ProjectsStack.Screen name="Workspace" component={WorkspaceScreen} />
      <ProjectsStack.Screen name="Archived" component={ArchivedScreen} />
      <ProjectsStack.Screen name="Completed" component={CompletedScreen} />
      <ProjectsStack.Screen name="ReviewFile" component={ReviewFileScreen} />
    </ProjectsStack.Navigator>
  );
}

function DesignerProfileStack() {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileStack.Screen name="ProfileMain" component={ProfileScreen} />
      <ProfileStack.Screen name="Wallet" component={WalletScreen} />
      <ProfileStack.Screen name="Settings" component={SettingsScreen} />
      <ProfileStack.Screen name="Notifications" component={NotificationsScreen} />
      <ProfileStack.Screen name="Portfolio" component={PortfolioScreen} />
      <ProfileStack.Screen name="Schedule" component={ScheduleScreen} />
      <ProfileStack.Screen name="AIScanner" component={AIScannerScreen} />
      <ProfileStack.Screen name="Smartwatch" component={SmartwatchScreen} />
      <ProfileStack.Screen name="Language" component={LanguageScreen} />
      <ProfileStack.Screen name="Help" component={HelpScreen} />
    </ProfileStack.Navigator>
  );
}

export default function DesignerTabNavigator() {
  return (
    <Tab.Navigator
      tabBar={(props) => <BottomTabBar {...props} userType="designer" />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={DesignerHomeStack} />
      <Tab.Screen name="Jobs" component={DesignerJobsStack} />
      <Tab.Screen name="Projects" component={DesignerProjectsStack} />
      <Tab.Screen name="SkillHub" component={SkillHubScreen} />
      <Tab.Screen name="Profile" component={DesignerProfileStack} />
    </Tab.Navigator>
  );
}
