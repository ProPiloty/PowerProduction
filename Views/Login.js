import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';

import Header from '../Components/Header';

const Login = ({navigation}) => {

  const loginUser = () => {
    return navigation.navigate('Dashboard');
  }

  return (
    <View style={styles.login} >
      <Header />
      <Text>Login</Text>
      <TextInput placeholder="Username/Email" />
      <TextInput placeholder="Password" />
      <Button title="Log In" onPress={loginUser()} />
      <Button title="Register" onPress={() => navigation.navigate('Register')} />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  login: {
    flex: 1,
    // paddingTop: 40,
    // justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Login;