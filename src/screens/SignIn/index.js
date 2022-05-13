import React from 'react';

import {
  View
} from 'react-native';

import { Logo } from '../../components/Logo';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { styles } from './styles';

export function SignIn() {
  return (
    <View style={styles.container}>
      <Logo/>

      <Input
        placeholder="E-mail"
        returnKeyType="next"
        onSubmitEditing={ () => Keyboard.dismiss()}
        autoCorrect={false}
        autoCapitalize="none"
        // value={email}
        // onChangeText={ (text) => setNome(text) }
      />

      <Button
        // onPress={(handleSignUp)}
        title={"Entrar"}
        activeOpacity={0.7}
      />

    </View>
  );
}