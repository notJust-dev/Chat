import '../../global.css';
import { Stack } from 'expo-router';

export default function RootLayout() {
  const isAuthenticated = true;

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Protected guard={!isAuthenticated}>
        <Stack.Screen name='(auth)' />
      </Stack.Protected>

      <Stack.Protected guard={isAuthenticated}>
        <Stack.Screen name='(drawer)' />
      </Stack.Protected>
    </Stack>
  );
}
