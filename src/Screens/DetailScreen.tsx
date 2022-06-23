import React from 'react';
import {Text, SafeAreaView, Button} from 'react-native';
import {RoutePath} from '../common/ScreenRoutes';

function DetailsScreen({navigation}) {
  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button
        title="더 자세히"
        onPress={() => navigation.push(RoutePath.Details.name)}
      />
    </SafeAreaView>
  );
}

export default DetailsScreen;
