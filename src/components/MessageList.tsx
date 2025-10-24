import { ActivityIndicator, FlatList } from 'react-native';
import MessageListItem from './MessageListItem';
import { useQuery } from '@tanstack/react-query';
import { Channel } from '@/types';
import { useSupabase } from '@/providers/SupabaseProvider';
import { useUser } from '@clerk/clerk-expo';

export default function MessageList({ channel }: { channel: Channel }) {
  const supabase = useSupabase();
  const { user } = useUser();

  // TODO: PAGINATION
  const {
    data: messages,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['messages', channel.id],
    queryFn: async () => {
      const { data } = await supabase
        .from('messages')
        .select('*')
        .eq('channel_id', channel.id)
        .order('created_at', { ascending: false })
        .throwOnError();

      return data;
    },
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <FlatList
      data={messages}
      contentContainerClassName='p-4'
      renderItem={({ item }) => (
        <MessageListItem
          message={item}
          isOwnMessage={item.user_id === user?.id}
        />
      )}
      inverted
      showsVerticalScrollIndicator={false}
    />
  );
}
