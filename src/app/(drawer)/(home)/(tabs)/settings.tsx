import { View, Text, Button } from 'react-native';
import { useAuth } from '@clerk/clerk-expo';
import { useSupabase } from '@/providers/SupabaseProvider';

export default function HomeScreen() {
  const { signOut } = useAuth();

  const supabase = useSupabase();

  const testInsert = async () => {
    const { data, error } = await supabase
      .from('Test')
      .insert({ test: 'Testing inserts 2' });

    console.log(error);
  };

  const testFetch = async () => {
    const { data, error } = await supabase.from('Test').select('*');

    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <View className='flex-1 items-center justify-center'>
      <Text className='text-3xl'>Settings</Text>

      <Button onPress={() => signOut()} title='Sign out' />

      <Button onPress={testInsert} title='Test insert' />
      <Button onPress={testFetch} title='Test fetch' />
    </View>
  );
}
