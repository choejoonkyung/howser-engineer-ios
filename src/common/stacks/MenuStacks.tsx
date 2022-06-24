import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../../screens/HomeScreen';

const Drawer = createDrawerNavigator();

function MenuStacks() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="home" component={HomeScreen} />
    </Drawer.Navigator>
  );
}

export default MenuStacks;
