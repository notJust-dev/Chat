import { FlatList } from 'react-native';
import users from '@/data/users';
import UserListItem from './UserListItem';
import { User } from '@/types';

type UserListProps = {
  onPress?: (user: User) => void;
};

export default function UserList({ onPress }: UserListProps) {
  return (
    <FlatList
      data={users}
      renderItem={({ item }) => <UserListItem user={item} onPress={onPress} />}
    />
  );
}
