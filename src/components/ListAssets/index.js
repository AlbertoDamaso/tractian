import React from 'react';
import {
  FlatList
} from 'react-native';
 
import { LineDivider } from '../LineDivider';
import { Item } from '../Item';
import { styles } from './styles';

export function ListAssets({ data, ...rest }) {
  return (
    <FlatList
        data={data}
        style={styles.matches}
        ItemSeparatorComponent={() => <LineDivider/>}        
        keyExtractor={ item => item.key}
        renderItem={({ item }) => (
          <Item data={item}/> 
        )}
        {...rest}
    />  
  );
}