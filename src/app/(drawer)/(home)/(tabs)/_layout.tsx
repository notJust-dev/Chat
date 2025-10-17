import { Tabs } from 'expo-router';
import { NativeTabs, Icon, Label } from 'expo-router/unstable-native-tabs';
import { Platform } from 'react-native';

export default function TabsLayout() {
  if (Platform.OS === 'ios') {
    return (
      <NativeTabs>
        <NativeTabs.Trigger name='chats'>
          <Label>Chats</Label>
          <Icon sf='message.fill' drawable='custom_android_drawable' />
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name='settings'>
          <Icon sf='gear' drawable='custom_settings_drawable' />
          <Label>Settings</Label>
        </NativeTabs.Trigger>

        <NativeTabs.Trigger name='search' role='search'>
          <Label>Search</Label>
        </NativeTabs.Trigger>
      </NativeTabs>
    );
  }

  return <Tabs />;
}
