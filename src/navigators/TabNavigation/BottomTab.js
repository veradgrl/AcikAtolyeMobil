import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from '../StackNavigation/HomeStack';
import ProfileStack from '../StackNavigation/ProfileStack'
 
const Tab = createBottomTabNavigator();
 // tab'ler stak'leri tutar ve stak yığındır
const BottomTab = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="ProfileStack" component={ProfileStack} />
    </Tab.Navigator>
  );
};
 
export default BottomTab;