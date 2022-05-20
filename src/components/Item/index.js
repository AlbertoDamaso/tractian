import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback as TWF
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

export function Item({ data }){
  const navigation = useNavigation();

  function handleStatus(){
    navigation.navigate('Status');
  }

  return (
    <TWF
      onPress={(handleStatus)}
    // onLongPress={ () => deleteItem(data)}
    >
      <View style={styles.container}>
        <View style={styles.areaImg}>
          <Image
            source={{uri:data.image}}//source={{uri:data.image}}
            style={styles.image}
          />  
        </View>
        <View style={styles.areaTxt}>
          <Text style={styles.title}>
            {data.name}
          </Text>
          <Text style={styles.text}>
            Modelo: {data.model}
          </Text>
          <Text style={styles.text}> 
            Status: {data.status} 
          </Text>
          <Text style={styles.text}> 
            Sensor: {data.sensors} 
          </Text>          
        </View>
      </View>
    </TWF>    
  );
}