import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';

import Header from '../Components/Header';

const Auth = ({navigation}) => {
  return (
    <View style={styles.auth} >
      <Header />
      <Text>Login</Text>
      <TextInput placeholder="Username/Email" />
      <TextInput placeholder="Password" />
      <Button title="Log In" onPress={() => navigation.navigate('Dashboard')} />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  auth: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Auth;