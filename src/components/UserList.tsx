import { FlatList, Alert } from 'react-native';
import UserListItem from './UserListItem';
import { User } from '@/types';
import { useSupabase } from '@/providers/SupabaseProvider';
import { useEffect, useState } from 'react';
import { useSession, useUser } from '@clerk/clerk-expo';

import { Tables } from '@/types/database.types';
type User = Tables<'users'>;

type UserListProps = {
  onPress?: (user: User) => void;
};

export default function UserList({ onPress }: UserListProps) {
  const supabase = useSupabase();

  const { user } = useUser();

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .neq('id', user?.id);

      if (error) {
        Alert.alert('Error', error.message);
      } else {
        setUsers(data);
      }
    };

    fetchUsers();
  }, []);

  return (
    <FlatList
      data={users}
      renderItem={({ item }) => <UserListItem user={item} onPress={onPress} />}
    />
  );
}
