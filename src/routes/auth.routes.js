import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignIn } from '../screens/SignIn';

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
    </AuthStack.Navigator>
  );
}