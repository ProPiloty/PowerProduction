import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';

import BottomTabNav from '../Components/BottomTabNav';

const Account = ({navigation}) => {
  return (
    <View style={styles.homePage}>
      <Text>Account Page</Text>
      {/* <BottomTabNav /> */}
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

export default Account;