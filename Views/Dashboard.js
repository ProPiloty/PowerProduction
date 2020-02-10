import React from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text,
} from 'react-native';

const Dashboard = ({navigation}) => {
  return (
    <View style={styles.dashboard}>
      <Text>Dashboard</Text>
      <Button title="Go home" onPress={() => navigation.navigate('Home')} />
    </View>
  )
}

const styles = StyleSheet.create({
  dashboard: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
  }
});

export default Dashboard;