import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import DetailsScreen from '../screens/DetailScreen';
import HomeScreen from '../screens/HomeScreen';

export const SCREENS = {
  HomeScreen: {name: 'Home', title: 'Home', component: HomeScreen},
  DetailsScreen: {name: 'Details', title: 'Details', component: DetailsScreen},
} as const;

const SCREENSkeys = Object.keys(SCREENS) as (keyof typeof SCREENS)[];
const Stack = createNativeStackNavigator();

function ScreenRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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

export default ScreenRoutes;
