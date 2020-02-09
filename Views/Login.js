import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';

import Header from '../Components/Header';
import LoginForm from '../Components/LoginForm';

const Login = ({navigation}) => {

  const loginUser = (user) => {
    return navigation.navigate('Dashboard');
  }

  return (
    <View style={styles.login} >
      <Header />
      <Text>Login</Text>
      <LoginForm loginUser={loginUser} />
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