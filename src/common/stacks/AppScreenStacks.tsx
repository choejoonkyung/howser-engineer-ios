import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import OutBoxScreen from '../../screens/OutBoxScreen';
import DrawerNavigatorStacks from './DrawerNavigatorStacks';
import OutBoxDetailScreen from '../../screens/OutBoxDetailScreen';

export const SCREENS = {
  OutBoxScreen: {name: 'OutBox', title: 'OutBox', component: OutBoxScreen},
  OutBoxDetailScreen: {
    name: 'OutBox Detail',
    title: 'OutBox Detail',
    component: OutBoxDetailScreen,
  },
} as const;

export const SCREENSkeys = Object.keys(SCREENS) as (keyof typeof SCREENS)[];
const Stack = createNativeStackNavigator();

function AppScreenStacks() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* NavigationContainer stacks */}
        <Stack.Screen
          name="HOME"
          options={{
            headerShown: false,
          }}>
          {() => <DrawerNavigatorStacks />}
        </Stack.Screen>

        {/* screen stacks */}
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
