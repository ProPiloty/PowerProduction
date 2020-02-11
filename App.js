import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import StackNav from './Components/StackNav';

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
      <StackNav />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;
