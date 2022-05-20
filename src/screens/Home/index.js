import React, { useState, useContext, useEffect } from 'react';
import {
  View,
  SafeAreaView
} from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';

import { AreaHeader } from '../../components/AreaHeader';
import { ListAssets } from '../../components/ListAssets';
import { styles } from './styles';
import api from '../../services/api';
import { AuthContext } from '../../contexts/auth';
import { Value } from 'react-native-reanimated';

export function Home() {
  const { user } = useContext(AuthContext);
  const unitId = user && user.unitId;
  const [findMotor, setFindMotor] = useState(null);
  const [allMotor, setAllMotor] = useState(null);
  const [motor, setMotor] = useState(null); 

    async function listMotor(){
      const resp = await api.get('/assets');
      setAllMotor(resp.data);
      setMotor(resp.data);
      setFindMotor(allMotor.find( ({ unitId }) =>{ unitId === unitId }));

      console.log(findMotor);

    }
    listMotor();

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <AreaHeader
            isDrawer={1}
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