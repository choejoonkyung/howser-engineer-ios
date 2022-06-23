import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Styles from './common/Styles';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={Styles.container}>
        <Text>Hello Worlds!</Text>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
