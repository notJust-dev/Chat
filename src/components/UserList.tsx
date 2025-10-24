import { FlatList, Alert, ActivityIndicator, Text } from 'react-native';
import UserListItem from './UserListItem';
import { User } from '@/types';
import { useSupabase } from '@/providers/SupabaseProvider';
import { useEffect, useState } from 'react';
import { useSession, useUser } from '@clerk/clerk-expo';
import { useQuery } from '@tanstack/react-query';

import { Tables } from '@/types/database.types';
type User = Tables<'users'>;

type UserListProps = {
  onPress?: (user: User) => void;
};

export default function UserList({ onPress }: UserListProps) {
  const supabase = useSupabase();
  const { user } = useUser();

  const { data, error, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const { data } = await supabase
        .from('users')
        .select('*')
        .neq('id', user?.id)
        .throwOnError();

      return data;
    },
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>{error.message}</Text>;
  }

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <UserListItem user={item} onPress={onPress} />}
    />
  );
}
