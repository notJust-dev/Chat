import {
  View,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

export default function MessageInput() {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    console.log('Send message');
    // store in db

    setMessage('');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={80}
    >
      <SafeAreaView
        edges={['bottom']}
        className='p-4 flex-row gap-4 bg-white border-t border-gray-200 items-center'
      >
        <Pressable className='bg-gray-200 rounded-full p-2 w-10 h-10'>
          <Ionicons name='image' size={20} color='#6B7280' />
        </Pressable>

        <TextInput
          placeholder='Type something...'
          value={message}
          onChangeText={setMessage}
          multiline
          className='bg-gray-100 flex-1 rounded-3xl px-4 py-3 text-gray-900 text-base max-h-[120px]'
        />

        <Pressable
          onPress={handleSend}
          disabled={!message}
          className={`${message ? 'bg-blue-500' : 'bg-gray-200'} rounded-full p-2 w-10 h-10 items-center justify-center`}
        >
          <Ionicons
            name='send'
            size={20}
            color={message ? '#FFFFFF' : '#9CA3AF'}
          />
        </Pressable>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
