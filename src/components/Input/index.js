import React from 'react';

import {
  TextInput
} from 'react-native';
import { theme } from '../../global/styles/theme';

import { styles } from './styles';

export function Input({...rest}){
  return(
      <TextInput
          placeholderTextColor={theme.colors.primary}
          style={styles.input}
          {...rest}
      />
  )
}