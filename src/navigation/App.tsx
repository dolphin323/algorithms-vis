import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import AlgorithmDetail from '../screens/AlgosDetails';
import BottomTab from './BottomTab';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AlgorithmList">
        <Stack.Screen
          name="BottomTab"
          component={BottomTab}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="AlgorithmDetail"
          component={AlgorithmDetail}
          options={{title: 'Algorithm Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
