import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Container, Input} from '../components';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  return (
    <Container>
      <View style={styles.container}>
        <Input
          label={'Email'}
          value={email}
          onChangeText={value => setEmail(value)}
        />

        <Input
          style={styles.gap}
          label={'Password'}
          value={password}
          secureTextEntry={secureTextEntry}
          onTooglePassword={() => setSecureTextEntry(!secureTextEntry)}
          onChangeText={value => setPassword(value)}
        />

        <Button
          style={styles.gap}
          label={'Login'}
          onPress={() => navigation.replace('Home')}
        />
      </View>
    </Container>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    justifyContent: 'center',
  },

  gap: {
    marginTop: 16,
  },
});
