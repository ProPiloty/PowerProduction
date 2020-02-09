import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={styles.homePage}>
      <Text>Home</Text>
      <Button
      title="Go to Jane's profile"
      onPress={() => navigation.navigate('Auth', {name: 'Jane'})}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homePage: {
    flex: 2,
  }
});

export default Home;