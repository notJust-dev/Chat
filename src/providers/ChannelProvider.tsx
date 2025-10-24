import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useSupabase } from './SupabaseProvider';
import { useUser } from '@clerk/clerk-expo';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { ActivityIndicator, View, Text } from 'react-native';
import { ChannelWithUsers } from '@/types';
import { RealtimeChannel } from '@supabase/supabase-js';

type ChannelContext = {
  channel: ChannelWithUsers | null;
  realTimeChannel?: RealtimeChannel | null;
};

const ChannelContext = createContext<ChannelContext>({
  channel: null,
});

type ChannelProviderProps = PropsWithChildren<{
  id: string;
}>;

export default function ChannelProvider({
  children,
  id,
}: ChannelProviderProps) {
  const supabase = useSupabase();

  const [realTimeChannel, setRealTimeChannel] =
    useState<RealtimeChannel | null>();

  const queryClient = useQueryClient();

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

  // REALTIME
  useEffect(() => {
    // Join a room/topic. Can be anything except for 'realtime'.
    const realTimeChannel = supabase.channel(`channel:${id}:messages`);

    // Simple function to log any messages we receive
    function messageReceived(payload) {
      queryClient.setQueryData(['messages', id], (oldData: any) => [
        payload.payload,
        ...oldData,
      ]);
    }
    // Subscribe to the Channel
    realTimeChannel.on(
      'broadcast',
      { event: 'message_sent' }, // Listen for "shout". Can be "*" to listen to all events
      (payload) => messageReceived(payload)
    );

    /**
     * Sending a message after subscribing will use Websockets
     */
    realTimeChannel.subscribe((status) => {
      if (status !== 'SUBSCRIBED') {
        return null;
      }
      setRealTimeChannel(realTimeChannel);
    });

    return () => {
      if (realTimeChannel) {
        supabase.removeChannel(realTimeChannel);
      }
      setRealTimeChannel(null);
    };
  }, []);

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

  return (
    <ChannelContext.Provider
      value={{
        channel,
        realTimeChannel,
      }}
    >
      {children}
    </ChannelContext.Provider>
  );
}

export const useChannel = () => useContext(ChannelContext);
