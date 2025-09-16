import 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import '../global.css';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 2,
    },
  },
});

export default function RootLayout() {
  const [loaded] = useFonts({
    'sf-pro-display-regular': require('./src/assets/fonts/sf-pro-display-regular.ttf'),
    'sf-pro-display-medium': require('./src/assets/fonts/sf-pro-display-medium.ttf'),
    'sf-pro-display-bold': require('./src/assets/fonts/sf-pro-display-bold.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <Stack>
          <Stack.Screen 
            name="index" 
            options={{ 
              title: 'Pokédex',
              headerShown: false 
            }} 
          />
          <Stack.Screen 
            name="pokemon/[id]" 
            options={{ 
              title: 'Pokémon Details',
              headerShown: false 
            }} 
          />
        </Stack>
        <StatusBar style="light" backgroundColor="transparent" translucent />
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}