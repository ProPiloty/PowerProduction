import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import Router from './Router';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const App = () => {
  return (
    <NavigationContainer >
      <Router />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;
