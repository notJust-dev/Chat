import { Stack } from 'expo-router';

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen
        name='(tabs)'
        options={{ headerShown: false, title: 'Home' }}
      />
      <Stack.Screen
        name='channel/[id]'
        options={{
          title: 'Channel',
          headerBackButtonDisplayMode: 'minimal',
          // headerLargeTitle: true,
          // headerTransparent: true,
        }}
      />

      <Stack.Screen
        name='new/chat'
        options={{ title: 'New Chat', presentation: 'modal' }}
      />
    </Stack>
  );
}
