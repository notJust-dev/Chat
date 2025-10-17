import { View, Text, Button } from 'react-native';
import { useAuth } from '@clerk/clerk-expo';

export default function HomeScreen() {
  const { signOut } = useAuth();

  return (
    <View className='flex-1 items-center justify-center'>
      <Text className='text-3xl'>Settings</Text>

      <Button onPress={() => signOut()} title='Sign out' />
    </View>
  );
}
