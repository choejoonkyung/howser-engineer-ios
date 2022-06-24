import React from 'react';
import {Button, SafeAreaView} from 'react-native';
import {ScreenBaseProps} from '..';
import CommonStyles from '../../common/CommonStyles';

interface Props extends ScreenBaseProps {}

function OutBoxDetail({navigation}: Props) {
  navigation.setOptions({
    headerShown: false,
  });

  return (
    <SafeAreaView style={CommonStyles.container}>
      <Button title="끄기" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
}

export default OutBoxDetail;
