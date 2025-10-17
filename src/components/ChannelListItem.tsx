import { Channel } from '@/types';
import { View, Text, Image, Pressable } from 'react-native';
import { formatDistanceToNow } from 'date-fns';
import { Link } from 'expo-router';

type ChannelListItemProps = {
  channel: Channel;
};

export default function ChannelListItem({ channel }: ChannelListItemProps) {
  return (
    <Link href={`/channel/${channel.id}`} asChild>
      <Pressable className='flex-row gap-3 p-4 border-b border-gray-200'>
        {/* Channel Image */}
        <Image
          source={{ uri: channel.avatar }}
          className='w-12 h-12 rounded-full'
        />

        <View className='flex-1'>
          <Text
            className='font-bold text-lg text-neutral-600'
            numberOfLines={1}
          >
            {channel.name}
          </Text>
          <Text className='text-sm text-gray-500' numberOfLines={1}>
            {channel.lastMessage?.content || 'No messages yet'}
          </Text>
        </View>

        {channel.lastMessage && (
          <Text className='text-xs text-neutral-500'>
            {formatDistanceToNow(new Date(channel.lastMessage.createdAt), {
              addSuffix: true,
            })}
          </Text>
        )}
      </Pressable>
    </Link>
  );
}
