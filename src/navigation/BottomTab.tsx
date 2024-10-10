import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../screens/Profile';
import AlgorithmList from '../screens/AlgosPreviews';

type TabParamList = {
  AlgorithmList: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: 'violet',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="AlgorithmList" component={AlgorithmList} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTab;
