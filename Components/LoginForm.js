import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';

const LoginForm = ({loginUser}) => {
  const [usernameEmail, setUsernameEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    const user = {
      usernameEmail,
      password,
    }

    return loginUser(user);
  }

  return (
    <View>
      <Text>LoginForm</Text>
      <TextInput placeholder="Username/Email" onChangeText={(textValue) => {setUsernameEmail(textValue)}} />
      <TextInput placeholder="Password" onChangeText={(textValue) => {setPassword(textValue)}} />
      <Button title="Log In" onPress={() => loginUser()} />
    </View>
  )
}

export default LoginForm;