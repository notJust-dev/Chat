import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  return (
    <Drawer>
      <Drawer.Screen
        name='(home)'
        options={{ title: 'Home', headerShown: false }}
      />
      <Drawer.Screen name='about' options={{ title: 'About' }} />
    </Drawer>
  );
}
