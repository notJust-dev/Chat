import { Message } from '@/types';
import { View, Text, Image } from 'react-native';

type MessageListItemProps = {
  message: Message;
  isOwnMessage?: boolean;
};

export default function MessageListItem({
  message,
  isOwnMessage,
}: MessageListItemProps) {
  return (
    <View
      className={`flex-row mb-2 ${isOwnMessage ? 'justify-end' : 'justify-start'}`}
    >
      <View
        className={`max-w-[75%] gap-1 ${isOwnMessage ? 'items-end' : 'items-start'}`}
      >
        {/* Image */}
        {message.image && (
          <Image
            source={{ uri: message.image }}
            className='w-48 h-48 rounded-lg'
          />
        )}

        {/* Text bubble */}
        {message.content && (
          <View
            className={`rounded-2xl px-4 py-2 ${isOwnMessage ? 'bg-blue-500 rounded-br-md' : 'bg-gray-200 rounded-bl-md'}`}
          >
            <Text
              className={`text-base ${isOwnMessage ? 'text-white' : 'text-neutral-900'}`}
            >
              {message.content}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}
