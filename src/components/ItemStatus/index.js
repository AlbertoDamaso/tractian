import React from 'react';
import {
    View,
    Text
} from 'react-native';
import { Foundation, FontAwesome5 } from '@expo/vector-icons';

import { styles } from './styles';

export function ItemStatus({iconSelect, icon, text}) {
  return (
    <View style={styles.info}>

        {
            iconSelect === 1 ?
            <Foundation
                name={icon}
                size={24}
            />
            :
            <FontAwesome5
                name={icon}
                size={24}
            />
        }

        <Text style={styles.text}>
            {text}
        </Text>
    </View>
  );
}