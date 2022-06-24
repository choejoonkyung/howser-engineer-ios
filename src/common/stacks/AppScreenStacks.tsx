import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import DetailsScreen from '../../screens/DetailScreen';
import MenuStacks from './MenuStacks';

export const SCREENS = {
  DetailsScreen: {name: 'Details', title: 'Details', component: DetailsScreen},
} as const;

export const SCREENSkeys = Object.keys(SCREENS) as (keyof typeof SCREENS)[];
const Stack = createNativeStackNavigator();

function AppScreenStacks() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* draw menu stack */}
        <Stack.Screen
          name="HOME"
          options={{
            headerShown: false,
          }}>
          {() => <MenuStacks />}
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
