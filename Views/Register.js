import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';

import Header from '../Components/Header';
import RegisterForm from '../Components/RegisterForm';

const Register = ({navigation}) => {

  const registerUser = () => {
    return navigation.navigate('Dashboard');
  }

  return (
    <View style={styles.register} >
      <Header />
      <Text>Register</Text>
      <RegisterForm registerUser={registerUser} />
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  register: {
    flex: 1,
    alignItems: 'center',
  }
});

export default Register;