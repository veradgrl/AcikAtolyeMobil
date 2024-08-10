import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import OnBoardingStack from '../StackNavigation/OnBoardingStack';
import SettingsStack from '../StackNavigation/SettingsStack';
 
const Tab = createBottomTabNavigator();
 // tab'ler stak'leri tutar ve stak yığındır
const BottomTab = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}} initialRouteName='SettingsStack'>
      <Tab.Screen name="OnBoardingStack" component={OnBoardingStack} />
      <Tab.Screen name="SettingsStack" component={SettingsStack} />
    </Tab.Navigator>
  );
};
 
export default BottomTab;