import UserList from '@/components/UserList';
import { User } from '@/types';
import { View } from 'react-native';

export default function NewChat() {
  const handleUserPress = (user: User) => {
    console.log('User clicked: ', user.first_name);
  };

  return (
    <View className='bg-white flex-1'>
      <UserList onPress={handleUserPress} />
    </View>
  );
}
