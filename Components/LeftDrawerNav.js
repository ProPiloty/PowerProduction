import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import BottomTabNav from './BottomTabNav';

// import Dashboard from '../Views/Dashboard';
import Account from '../Views/Account';

const Drawer = createDrawerNavigator();

export default LeftDrawerNav = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Dashboard" component={BottomTabNav} />
      <Drawer.Screen name="Account" component={Account} />
    </Drawer.Navigator>
  );
}