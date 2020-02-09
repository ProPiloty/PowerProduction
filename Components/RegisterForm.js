import React,{useState} from 'react';
import {
  Alert,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';

const RegisterForm = ({registerUser}) => {
  const [usernameEmail, setUsernameEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const register = () => {
    if (password === passwordConfirm) {
      const user = {
        usernameEmail,
        password
      }
      return registerUser(user)
    } else {
      return Alert.alert('Error', 'Please make sure your passwords match.', {text: 'OK'})
    }
  }

  return (
    <View>
      <TextInput placeholder="Username/Email" onChangeText={(textValue) => {setUsernameEmail(textValue)}} />
      <TextInput placeholder="Password" onChangeText={(textValue) => {setPassword(textValue)}} />
      <TextInput placeholder="Password" onChangeText={(textValue) => {setPasswordConfirm(textValue)}} />
      <Button title="Register" onPress={() => register()} />
    </View>
  )
}

export default RegisterForm;