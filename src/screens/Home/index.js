import React, { useState, useContext } from 'react';
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

export function Home() {
  const { user } = useContext(AuthContext);
  const unitId = user && user.unitId;
  const [motor, setMotor] = useState(''); 

  async function listMotor(){
    try{
      const resp = await api.get('/assets');//`/assets/:${unitId}`
      setMotor(resp.data);
    }catch(error){
      alert('ERROR: '+ error);
    }
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