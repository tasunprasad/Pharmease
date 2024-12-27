import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import MyTabBar from '../components/TabBar';
import Home from '../screens/Home';
import ProductDetails from '../screens/ProductDetails';

export type ProtectedTabParamList = {
  Home: undefined;
  ProductDetails: undefined;
};

export default function ProtectedNavigator() {
  const Tab = createBottomTabNavigator<ProtectedTabParamList>();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}
      tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="ProductDetails" component={ProductDetails} />
    </Tab.Navigator>
  );
}
