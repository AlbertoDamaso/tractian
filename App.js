import React from "react";
import 'react-native-gesture-handler'
import { StatusBar, View, Text } from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import * as SplashScreen from 'expo-splash-screen';

import { useFonts } from 'expo-font';
import { Padauk_400Regular, Padauk_700Bold } from '@expo-google-fonts/padauk';

import { Routes } from "./src/routes";

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
      <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
      />
      <Routes/>
    </NavigationContainer>
  )

}