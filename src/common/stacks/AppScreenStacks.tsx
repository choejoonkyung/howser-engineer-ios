import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import DetailsScreen from '../../screens/DetailScreen';
import MenuStacks from './MenuStacks';
import HomeScreen from '../../screens/HomeScreen';

export const SCREENS = {
  DetailsScreen: {name: 'Details', title: 'Details', component: DetailsScreen},
} as const;

const SCREENSkeys = Object.keys(SCREENS) as (keyof typeof SCREENS)[];
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function AppScreenStacks() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{
            headerShown: false,
          }}>
          {() => <MenuStacks />}
        </Stack.Screen>
        {SCREENSkeys.map(key => (
          <Stack.Screen
            key={key}
            name={SCREENS[key].name}
            getComponent={() => SCREENS[key].component}
            options={{title: SCREENS[key].title}}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppScreenStacks;
