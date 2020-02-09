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
      <Button title="Go to Auth" onPress={() => navigation.navigate('Auth')} />
    </View>
  );
};

const styles = StyleSheet.create({
  homePage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Home;