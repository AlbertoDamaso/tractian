import React, { useState} from 'react';
import {
  View,
  Text,
} from 'react-native';

import { AreaHeader } from '../../components/AreaHeader';
import { ImgMotor } from '../../components/ImgMotor';
import { styles } from './styles';

import  imgMotor1  from '../../assets/motor1.png'

export function Status() {

  return (
    <View style={styles.container}>
      <AreaHeader
        empresa={"Motor H13D-1"}
      />
      <View style={styles.areaInfo}>
        <ImgMotor
          source={imgMotor1}
        />
      </View>
    </View>
  );
}