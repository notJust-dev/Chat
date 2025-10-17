import '../../global.css';
import { Stack } from 'expo-router';
import { ClerkProvider } from '@clerk/clerk-expo';
import { tokenCache } from '@clerk/clerk-expo/token-cache';
import { useAuth } from '@clerk/clerk-expo';
import { ActivityIndicator } from 'react-native';

function RootStack() {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Protected guard={!isSignedIn}>
        <Stack.Screen name='(auth)' />
      </Stack.Protected>

      <Stack.Protected guard={!!isSignedIn}>
        <Stack.Screen name='(drawer)' />
      </Stack.Protected>
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache}>
      <RootStack />
    </ClerkProvider>
  );
}
