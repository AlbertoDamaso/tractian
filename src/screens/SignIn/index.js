import React, { useState, useContext } from 'react';
import {
  Keyboard,
  Platform,
  KeyboardAvoidingView as KAV
} from 'react-native';

import { Logo } from '../../components/Logo';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { styles } from './styles';

import { AuthContext } from '../../contexts/auth';

export function SignIn() {
  const [email, setEmail] = useState('');
  const { signIn } = useContext(AuthContext);

  function handleSignIn(){
    signIn(email);
  }


  return (
    <KAV 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : ''}
      enabled
    >
      <Logo/>

      <Input
        placeholder="E-mail"
        returnKeyType="next"
        onSubmitEditing={ () => Keyboard.dismiss()}
        autoCorrect={false}
        autoCapitalize="none"
        value={email}
        onChangeText={ (text) => setEmail(text) }
      />

      <Button
        onPress={(handleSignIn)}
        activeOpacity={0.7}
        title={"Entrar"}
      />

    </KAV>
  );
}