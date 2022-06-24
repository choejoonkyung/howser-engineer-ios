import React from 'react';
import {Button, Text, SafeAreaView} from 'react-native';
import {ScreenBaseProps} from '.';
import {RoutePath} from '../common/ScreenRoutes';

interface Props extends ScreenBaseProps {}

function HomeScreen({navigation}: Props) {
  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen!</Text>
      <Button
        title="상세페이지로 이동"
        onPress={() => navigation.navigate(RoutePath.Details.name)}
      />
    </SafeAreaView>
  );
}

export default HomeScreen;
