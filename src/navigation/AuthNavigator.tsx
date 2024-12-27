import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LogIn from '../screens/LogIn';
import ProductDetails from '../screens/ProductDetails';
import Register from '../screens/Register';

export type AuthStackParamList = {
  LogIn: undefined;
  Register: undefined;
  ProductDetails: undefined;
};

export default function AuthNavigator() {
  const Stack = createNativeStackNavigator<AuthStackParamList>();

  return (
    <Stack.Navigator
      initialRouteName="LogIn"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
    </Stack.Navigator>
  );
}
