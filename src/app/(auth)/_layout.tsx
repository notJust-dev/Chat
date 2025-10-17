import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen
        name='sign-in'
        options={{
          title: 'Sign in',
          headerLargeTitle: true,
        }}
      />
      <Stack.Screen
        name='sign-up'
        options={{
          title: 'Sign up',
          headerLargeTitle: true,
        }}
      />
    </Stack>
  );
}
