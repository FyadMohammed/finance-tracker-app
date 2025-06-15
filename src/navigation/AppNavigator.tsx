import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import TransactionScreen from "../screens/TransactionScreen";
// Define the type for the navigation stack

export type RootStackParamList = {
  Home: undefined;
  Settings: undefined;
  TransactionList: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Transactions" component={TransactionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
