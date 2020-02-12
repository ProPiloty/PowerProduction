import React from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text,
} from 'react-native';

// import LeftDrawerNav from '../Components/LeftDrawerNav';

const Dashboard = ({navigation}) => {
  return (
    <View style={styles.dashboard}>
      <Text>Dashboard</Text>
      <Button title="Toggle Nav" onPress={() => navigation.toggleDrawer()} />
      <Button title="Go home" onPress={() => navigation.navigate('Home')} />
      {/* <LeftDrawerNav /> */}
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