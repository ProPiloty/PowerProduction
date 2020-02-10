import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';

import Header from '../Components/Header';

const Home = ({navigation}) => {
  return (
    <View style={styles.homePage}>
      <Header />
      <Text>A productivity app for the future.</Text>
      <Text>Manage your life, career, hobbies, and more.</Text>
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
      <Button title="Register" onPress={() => navigation.navigate('Register')} />
    </View>
  );
};

const styles = StyleSheet.create({
  homePage: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
  }
});

export default Home;