import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback as TWF
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

import img from '../../assets/motor1.png';

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
            source={img}//source={{uri:data.image}}
            style={styles.image}
          />  
        </View>
        <View style={styles.areaTxt}>
          <Text style={styles.title}>
            {data.title}
          </Text>
          <Text style={styles.text}>
            Modelo: {data.model}
          </Text>
          <Text style={styles.text}> 
            Status: {data.status} 
          </Text>
          <Text style={styles.text}> 
            Sensor: {data.sensor} 
          </Text>          
        </View>
      </View>
    </TWF>    
  );
}