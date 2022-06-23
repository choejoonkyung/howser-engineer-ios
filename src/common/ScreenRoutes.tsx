import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import DetailsScreen from '../Screens/DetailScreen';
import HomeScreen from '../Screens/HomeScreen';
import {Button, Text, View} from 'react-native';

const Stack = createNativeStackNavigator();

function ScreenRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={RoutePath.Home.name}
          component={HomeScreen}
          options={{
            title: RoutePath.Home.title,
            headerLeft: () => (
              <Button
                onPress={() => console.log('menu')}
                title="메뉴"
                color="#000"
              />
            ),
          }}
        />
        <Stack.Screen
          name={RoutePath.Details.name}
          component={DetailsScreen}
          options={{title: RoutePath.Details.title}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export const RoutePath = {
  Home: {
    name: 'Home',
    title: '하우저',
  },
  Details: {
    name: 'Details',
    title: '상세',
  },
};

export default ScreenRoutes;
