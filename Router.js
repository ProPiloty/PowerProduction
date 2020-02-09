import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './Views/Home';
import Login from './Views/Login';
import Register from './Views/Register';
import Dashboard from './Views/Dashboard';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <>
      <Stack.Navigator headerMode="none" >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </>
  )
}

export default Router;