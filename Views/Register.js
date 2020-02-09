import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';

import Header from '../Components/Header';

const Register = ({navigation}) => {

  const registerUser = () => {
    return navigation.navigate('Dashboard');
  }

  return (
    <View style={styles.register} >
      <Header />
      <Text>Register</Text>
      <TextInput placeholder="Username/Email" />
      <TextInput placeholder="Password" />
      <TextInput placeholder="Password" />
      <Button title="Register" onPress={registerUser()} />
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  register: {
    flex: 1,
    // paddingTop: 40,
    // justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Register;