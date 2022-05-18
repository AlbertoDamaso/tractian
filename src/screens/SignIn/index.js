import React, { useState } from 'react';
import {
  View,
  Keyboard,
  Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Logo } from '../../components/Logo';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { styles } from './styles';
import api from '../../services/api';

export function SignIn() {
  const navigation = useNavigation();
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [findEmail, setFindEmail] = useState('');

  //Ajustar momento click validation.
  function signIn(){
    if(findEmail.length === 1 ){
      navigation.navigate('AppRoutes');
    }else{
      alert('Email não cadastrado!');
    }
  }
  
  async function handleSignIn(){
    if(email == ''){
      alert('Digite um e-mail valido');
      return;
    }

    try{
      const response = await api.get('/users');
      setUser(response.data);
      Keyboard.dismiss(); //Garantir que o teclado sera fechado!

    }catch(error){
      console.log('ERROR: '+ error);
    }

    user.filter(function(p){
      return true
    })

    const temUser = user => user.email === email
    setFindEmail(user.filter(temUser));

    signIn();
  }



  return (
    <View style={styles.container}>
      <Logo/>

      <Input
        placeholder="E-mail"
        returnKeyType="next"
        autoCorrect={false}
        autoCapitalize="none"
        value={email}
        onChangeText={ (text) => setEmail(text) }
      />

      <Button
        onPress={(handleSignIn)}
        title={"Entrar"}
        activeOpacity={0.7}
      />

      { user &&
      <Text>
        Email: {user.email}
      </Text>
      }
    </View>
  );
}