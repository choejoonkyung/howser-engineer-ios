import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../../screens/HomeScreen';
import MenuDrawer from '../../components/MenuDrawer';

const Drawer = createDrawerNavigator();

function MenuStacks() {
  return (
    <Drawer.Navigator
      initialRouteName="HOWSER"
      drawerContent={props => <MenuDrawer {...props} />}>
      <Drawer.Screen name="HOWSER" component={HomeScreen} />
    </Drawer.Navigator>
  );
}

export default MenuStacks;
