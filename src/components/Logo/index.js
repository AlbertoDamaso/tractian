import React from 'react';
import {
  Image
} from 'react-native';

import imgLogo from '../../assets/logo.png';


export function Logo() {
  return (
      <Image
        source={imgLogo}
        resizeMode="stretch"
      />
  );
}