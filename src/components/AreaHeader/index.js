import React from 'react';

import {
  View,
  Text
} from 'react-native';

import { GoBack } from '../GoBack';
import { Drawer } from '../Drawer';
import { styles } from './styles';

export function AreaHeader({ isDrawer, empresa, unidade}) {

  return (
    <View style={styles.areaHeader}>

        {isDrawer === 1 ? <Drawer/> : <GoBack/>}

        <Text style={styles.title}>
          {empresa}
        </Text>
        <Text style={styles.subtitle}>
          {unidade}
        </Text>
    </View>
  );
}