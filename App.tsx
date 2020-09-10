import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { AppLoading } from 'expo';
import { Roboto_400Regular , useFonts } from '@expo-google-fonts/roboto';


import AppStack from './src/Routes/appStack';


export default function App() {

  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (
    <>
      <AppStack />
      <StatusBar style="auto" />

    </>
  );
  }
}