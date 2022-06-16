import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./src/routes/HomeStack";
import 'react-native-gesture-handler';
import { SafeAreaProvider } from "react-native-safe-area-context";
export default function App() {
  
  let [fontsLoaded] = useFonts({
    'Nunito-Sans-Light': require('./src/assets/fonts/NunitoSans-Light.ttf'),
    'Nunito-Sans-Regular': require('./src/assets/fonts/NunitoSans-Regular.ttf'),
    'Nunito-Sans-SemiBold': require('./src/assets/fonts/NunitoSans-SemiBold.ttf'),
    'Nunito-Sans-Bold': require('./src/assets/fonts/NunitoSans-Bold.ttf'),
  });
  return (
    <SafeAreaProvider>
        <NavigationContainer>
          <HomeStack/>
        </NavigationContainer>
    </SafeAreaProvider>
  );
}
