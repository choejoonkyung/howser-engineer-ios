import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerNavigator from '../../components/DrawerNavigator';
import HomeScreen from '../../screens/HomeScreen';
import {SCREENS} from './AppScreenStacks';
import {Text} from 'react-native';

const Drawer = createDrawerNavigator();

function MenuStacks() {
  return (
    <Drawer.Navigator
      initialRouteName="HOWSER"
      drawerContent={props => <DrawerNavigator {...props} />}>
      <Drawer.Screen
        name="HOWSER"
        component={HomeScreen}
        options={{
          drawerIcon: () => <Text>icon</Text>,
        }}
      />
      <Drawer.Screen
        name={SCREENS.DetailsScreen.name}
        component={SCREENS.DetailsScreen.component}
        options={{
          drawerIcon: () => <Text>icon</Text>,
        }}
      />
    </Drawer.Navigator>
  );
}

export default MenuStacks;
