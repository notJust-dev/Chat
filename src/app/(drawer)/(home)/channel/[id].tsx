import { Stack, useLocalSearchParams } from 'expo-router';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import channels from '@/data/channels';
import messages from '@/data/messages';
import MessageList from '@/components/MessageList';
import MessageInput from '@/components/MessageInput';
import { useQuery } from '@tanstack/react-query';
import { useSupabase } from '@/providers/SupabaseProvider';
import { useUser } from '@clerk/clerk-expo';
import ChannelProvider, { useChannel } from '@/providers/ChannelProvider';

function StackHeader() {
  const { channel } = useChannel();
  const { user } = useUser();

  if (!channel) {
    return null;
  }

  const otherUser = channel.users.find((u) => u.id !== user!.id);

  let channelName = channel.name || 'Unknown';
  if (channel.type === 'direct') {
    channelName = otherUser?.full_name || 'Unknown';
  }
  return <Stack.Screen options={{ title: channelName }} />;
}

export default function ChannelScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <ChannelProvider id={id}>
      <StackHeader />

      <MessageList />
      <MessageInput />
    </ChannelProvider>
  );
}
