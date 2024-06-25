// AppNavigator.tsx
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/Home";
import { DescriptionScreen } from "../screens/Description";
import { AppProvider } from "../context/AppContext";

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <AppProvider>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="description" component={DescriptionScreen} />
      </Stack.Navigator>
    </AppProvider>
  );
};

export default AppNavigator;
