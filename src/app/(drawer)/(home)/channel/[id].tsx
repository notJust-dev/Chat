import { Stack, useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';
import channels from '@/data/channels';

export default function ChannelScreen() {
  const { id } = useLocalSearchParams();

  const channel = channels.find((c) => c.id === id);

  if (!channel) {
    return (
      <View>
        <Text>Channel not found</Text>
      </View>
    );
  }

  return (
    <View className='flex-1 items-center justify-center'>
      <Stack.Screen options={{ title: channel.name }} />

      <Text className='text-2xl'>Chanel screen: {channel.name}</Text>
    </View>
  );
}
