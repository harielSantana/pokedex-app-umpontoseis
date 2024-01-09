// AppNavigator.tsx
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/Home";
import { DescriptionScreen } from "../screens/Description";

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="description" component={DescriptionScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
