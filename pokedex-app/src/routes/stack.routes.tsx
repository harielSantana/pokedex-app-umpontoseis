// AppNavigator.tsx
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/Home";
import { DescriptionScreen } from "../screens/Description";

type AppStackParamList = {
  Home: undefined;
  Description: undefined;
};

const Stack = createStackNavigator<AppStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Description" component={DescriptionScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
