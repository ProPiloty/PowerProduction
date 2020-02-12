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
      <StatusBar barStyle="dark-content" backgroundColor="#6a51ae" style={styles.statusBar} />
      <Text>PowerProduction</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusBar: {
    height: 40,
  }
});

export default Header;