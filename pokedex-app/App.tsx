// App.tsx

//IMPORT TO REACT NAVIGATION
import "react-native-gesture-handler";

import React from "react";
import { Platform, StatusBar, View } from "react-native";
import styled, { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { RFValue } from "react-native-responsive-fontsize";

import themes from "./src/themes";
import AppNavigator from "./src/routes/stack.routes";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const App: React.FC = () => {
  const isPlatform = Platform.OS === "ios";

  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ThemeProvider theme={themes}>
          <StatusBar
            backgroundColor="transparent"
            translucent
            barStyle={"light-content"}
          />
          <AppNavigator />
        </ThemeProvider>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
};

export default App;
