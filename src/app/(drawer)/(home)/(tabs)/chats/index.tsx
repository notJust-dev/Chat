import { FlatList } from 'react-native';
import channels from '@/data/channels';
import ChannelListItem from '@/components/ChannelListItem';

export default function ChannelListScreen() {
  return (
    <FlatList
      data={channels}
      className='bg-white'
      renderItem={({ item }) => <ChannelListItem channel={item} />}
      showsVerticalScrollIndicator={false}
      contentInsetAdjustmentBehavior='automatic'
    />
  );
}
