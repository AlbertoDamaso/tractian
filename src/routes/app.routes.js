import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { FontAwesome5 } from '@expo/vector-icons';

import { Home } from '../screens/Home';
import { Status } from '../screens/Status';
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
        drawerInactiveBackgroundColor: theme.colors.secondaryMais,
        drawerInactiveTintColor: theme.colors.light,

        drawerStyle:{
          width: '70%',
          backgroundColor: theme.colors.secondaryMais,
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
            <FontAwesome5
              name="home"
              color={color}
              size={24}
            />
          ),
        }}
      />   
      <AppDrawer.Screen 
        name="Status" 
        component={Status}
        options={{
          drawerLabel: () => null
        }}
      />       
                 
    </AppDrawer.Navigator>
    );
}