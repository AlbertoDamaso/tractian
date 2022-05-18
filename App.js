import React from "react";
import 'react-native-gesture-handler'
import { StatusBar } from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import * as SplashScreen from 'expo-splash-screen';

import { useFonts } from 'expo-font';
import { Padauk_400Regular, Padauk_700Bold } from '@expo-google-fonts/padauk';

import AuthProvider from './src/contexts/auth';
import { Routes } from "./src/routes";

// console.disableYellowBox = true;
console.ignoredYellowBox = ["Warning: Each", "Warning: Failed"];

export default function App(){
  const [fontsLoaded, error] = useFonts({
    Padauk_400Regular,
    Padauk_700Bold,
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return(
    <NavigationContainer>
      <AuthProvider>
        <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
        />
        <Routes/>
      </AuthProvider>
    </NavigationContainer>
  )

}