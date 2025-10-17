import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name='index'
        options={{
          title: 'Chat',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='chatbox' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen name='settings' options={{ title: 'Setting' }} />
    </Tabs>
  );
}
