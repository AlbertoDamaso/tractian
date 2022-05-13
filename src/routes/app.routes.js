import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather, MaterialIcons } from '@expo/vector-icons';

import { Home } from '../screens/Home';
import { CustomDrawer } from '../components/CustomDrawer';
import { theme } from '../global/styles/theme';

const AppDrawer = createDrawerNavigator();

export function AppRoutes() {
  return(
    <AppDrawer.Navigator
      drawerContent={ (props) => <CustomDrawer {...props} /> }
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: theme.colors.dark,
        drawerActiveBackgroundColor: theme.colors.primary,
        drawerInactiveBackgroundColor: theme.colors.secundaryMais,
        drawerInactiveTintColor: theme.colors.light,

        drawerStyle:{
          width: '70%',
          backgroundColor: theme.colors.secundaryMais
        },

        drawerItemStyle:{
          width: '85%',
          alignSelf: 'center',
          borderRadius: 8,
        },

        drawerLabelStyle:{
          fontSize: 19,
          fontFamily: theme.fonts.title,
          marginLeft: -25,
        }
      }}
    >
      <AppDrawer.Screen 
        name="Início" 
        component={Home}
        options={{
          drawerIcon: ({color}) => (
            <MaterialIcons
              name="add-shopping-cart"
              color={color}
              size={24}
            />
          ),
        }}
      />   
      
                 
    </AppDrawer.Navigator>
    );
}