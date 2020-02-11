import { createDrawerNavigator } from '@react-navigation/drawer';

import Dashboard from '../Views/Dashboard';
import Account from '../Views/Account';

const Drawer = createDrawerNavigator();

export const LeftDrawerNav = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="Account" component={Account} />
    </Drawer.Navigator>
  );
}