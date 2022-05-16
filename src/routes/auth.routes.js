import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignIn } from '../screens/SignIn';
import { AppRoutes } from './app.routes';
import { Status } from '../screens/Status';

const AuthStack = createNativeStackNavigator();

export function AuthRoutes(){
  return(
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: 'transparent'}
      }}
    >
      <AuthStack.Screen 
        name="SignIn"
        component={SignIn}
      />
      <AuthStack.Screen 
        name="AppRoutes"
        component={AppRoutes}   
      />      
      <AuthStack.Screen 
        name="Status"
        component={Status}   
      />       
    </AuthStack.Navigator>
  );
}