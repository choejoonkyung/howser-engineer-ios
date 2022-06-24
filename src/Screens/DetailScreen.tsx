import React from 'react';
import {Text, SafeAreaView, Button} from 'react-native';
import {ScreenBaseProps} from '.';
import {SCREENS} from '../common/stacks/AppScreenStacks';

interface Props extends ScreenBaseProps {}

function DetailsScreen({navigation}: Props) {
  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button
        title="더 자세히"
        onPress={() => navigation.push(SCREENS.DetailsScreen.name)}
      />
    </SafeAreaView>
  );
}

export default DetailsScreen;
