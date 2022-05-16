import React from 'react';
import {
  Image
} from 'react-native';

import  motor  from '../../assets/motor1.png'


import { styles } from './styles';

export function ImgMotor({...rest}) {
  return (
    <Image
        source={motor}
        style={styles.imgMotor}
        {...rest}
    />

  );
}