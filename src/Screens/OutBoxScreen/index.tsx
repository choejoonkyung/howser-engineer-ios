import React from 'react';
import {Button, SafeAreaView} from 'react-native';
import {ScreenBaseProps} from '..';
import CommonStyles from '../../common/CommonStyles';
import {SCREENS} from '../../common/stacks/AppScreenStacks';

interface Props extends ScreenBaseProps {}

function OutBoxScreen({navigation}: Props) {
  return (
    <SafeAreaView style={CommonStyles.container}>
      <Button
        title="자세히"
        onPress={() => navigation.navigate(SCREENS.OutBoxDetailScreen.name)}
      />
    </SafeAreaView>
  );
}

export default OutBoxScreen;
