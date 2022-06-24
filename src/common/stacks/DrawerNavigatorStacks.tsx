import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerNavigator from '../../components/DrawerNavigator';
import HomeScreen from '../../screens/HomeScreen';
import {SCREENS} from './AppScreenStacks';
import {Text} from 'react-native';
import Icon from '../../components/Icon';

const Drawer = createDrawerNavigator();

function DrawerNavigatorStacks() {
  return (
    <Drawer.Navigator
      initialRouteName="HOWSER"
      drawerContent={props => <DrawerNavigator {...props} />}>
      <Drawer.Screen
        name="HOWSER"
        component={HomeScreen}
        options={{
          drawerIcon: () => <Icon name="Schedule" />,
        }}
      />
      <Drawer.Screen
        name={SCREENS.DetailsScreen.name}
        component={SCREENS.DetailsScreen.component}
        options={{
          drawerIcon: () => <Icon name="Memo" />,
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigatorStacks;
