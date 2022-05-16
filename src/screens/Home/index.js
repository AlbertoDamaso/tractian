import React, { useState } from 'react';
import {
  View,
  SafeAreaView
} from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';

import { AreaHeader } from '../../components/AreaHeader';
import { ListAssets } from '../../components/ListAssets';
import { styles } from './styles';

export function Home() {

  const [motor, setMotor] = useState([
    {key: '1', title: "Motor H13D-1", model: "motor", status: "Em Alerta", sensor:"GSJ1535"},
    {key: '2', title: "Motor H12D-1", model: "motor", status: "Em Alerta", sensor:"IBS1636"},
    {key: '3', title: "Motor H12D-3", model: "motor", status: "Em Operação", sensor:"JVC1134"},
  ]); 

  return (
    <View style={styles.container}>
      <SafeAreaView>
        {/*Se tiver mais de um ScrollView intale a biblioteca deste a baixo*/}
        <ScrollView>
          <AreaHeader
            empresa={"Tractian"}
            unidade={"Unidade1"}
          />
          
          <View>
            <ListAssets
              data={motor}
              showsHorizontalScrollIndicator={false}
            />
            
          </View>
        </ScrollView>
      </SafeAreaView>      
    </View>

  );
}