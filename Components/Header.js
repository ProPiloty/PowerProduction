import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

const Header = ({navigation}) => {
  return (
    <View style={styles.header} >
      <Text>PowerProduction</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Header;