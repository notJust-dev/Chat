import { Stack, useLocalSearchParams } from 'expo-router';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import channels from '@/data/channels';
import messages from '@/data/messages';
import MessageList from '@/components/MessageList';
import MessageInput from '@/components/MessageInput';
import { useQuery } from '@tanstack/react-query';
import { useSupabase } from '@/providers/SupabaseProvider';
import { useUser } from '@clerk/clerk-expo';

export default function ChannelScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const supabase = useSupabase();
  const { user } = useUser();

  const {
    data: channel,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['channels', id],
    queryFn: async () => {
      const { data } = await supabase
        .from('channels')
        .select('*, users(*)')
        .eq('id', id)
        .throwOnError()
        .single();
      return data;
    },
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error || !channel) {
    return (
      <View>
        <Text>Channel not found</Text>
      </View>
    );
  }

  const otherUser = channel.users.find((u) => u.id !== user!.id);

  let channelName = channel.name || 'Unknown';
  if (channel.type === 'direct') {
    channelName = otherUser?.full_name || 'Unknown';
  }

  return (
    <>
      <Stack.Screen options={{ title: channelName }} />

      <MessageList />
      <MessageInput />
    </>
  );
}
