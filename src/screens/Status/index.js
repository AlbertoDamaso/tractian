import React, { useState} from 'react';
import {
  View,
  Text,
} from 'react-native';

import { AreaHeader } from '../../components/AreaHeader';
import { ImgMotor } from '../../components/ImgMotor';
import { styles } from './styles';

import  imgMotor1  from '../../assets/motor1.png'
import { ItemStatus } from '../../components/ItemStatus';

export function Status() {

  return (
    <View style={styles.container}>
      <AreaHeader
        isDrawer={0}
        empresa={"Motor H13D-1"}
      />
      <View style={styles.areaInfo}>
        <ImgMotor
          source={imgMotor1}
        />

        <ItemStatus
          iconSelect={1}
          icon={"mobile-signal"}
          text={"Sensor: GSJ1535"}
        />   
        <ItemStatus
          iconSelect={1}
          icon={"refresh"}
          text={"Rotação: 1770RPM"}
        />
        <ItemStatus
          iconSelect={1}
          icon={"power"}
          text={"Potência: 63KWh"}
        />
        <ItemStatus
          iconSelect={2}
          icon={"temperature-high"}
          text={"Temperatura Limite: 50°"}
        />
        <ItemStatus
          iconSelect={2}
          icon={"chart-line"}
          text={"Eixos: X:Radial, Y:Axial, Z: Radial"}
        />
        <ItemStatus
          iconSelect={2}
          icon={"user"}
          text={"Responsáveis: Alex, Jair, Reinaldo"}
        />                                                          
      </View>
    </View>
  );
}