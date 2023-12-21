// App.tsx

import React from 'react';
import { Platform, StatusBar, View } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import themes from './src/themes';
import HomeScreen from './src/screens/Home';
import { RFValue } from 'react-native-responsive-fontsize';


const App: React.FC = () => {
  const isPlatform = Platform.OS === "ios";


  return (
    <ThemeProvider theme={themes}>
      <AppContainier>
          <StatusBar
          backgroundColor="transparent"
          translucent
          barStyle={'light-content'}
        />
        <HomeScreen />
      </AppContainier>  
    </ThemeProvider>
  );
};

const isPlatform = Platform.OS === "ios";

const AppContainier = styled.View`
    /* margin-top: ${RFValue(isPlatform ? 50: 20)}px; */
    background-color: ${({theme}) => theme.background.white};
`;

export default App;
