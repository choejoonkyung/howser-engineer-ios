import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../../screens/HomeScreen';

const Drawer = createDrawerNavigator();

function MenuStacks() {
  return (
    <Drawer.Navigator initialRouteName="HOWSER">
      <Drawer.Screen name="HOWSER" component={HomeScreen} />
    </Drawer.Navigator>
  );
}

export default MenuStacks;
