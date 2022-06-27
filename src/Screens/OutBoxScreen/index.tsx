import React, {useCallback} from 'react';
import {SafeAreaView, View} from 'react-native';
import {ScreenBaseProps} from '..';
import CommonStyles from '../../common/CommonStyles';
import {SCREENS} from '../../common/stacks/AppScreenStacks';

interface Props extends ScreenBaseProps {}

function OutBoxScreen({navigation}: Props) {
  const toDetailScrenn = useCallback(
    () => navigation.navigate(SCREENS.OutBoxDetailScreen.name),
    [],
  );

  return (
    <SafeAreaView style={CommonStyles.container}>
      <GridList onPress={toDetailScrenn} />
    </SafeAreaView>
  );
}

export default OutBoxScreen;

function Grid({onPress}: {onPress: () => void}) {
  return (
    <View
      style={{
        width: '32.5%',
        paddingBottom: '33%',
        backgroundColor: '#bbb',
        margin: 1,
      }}
      onTouchStart={onPress}></View>
  );
}

function GridList({onPress}: {onPress: () => void}) {
  return (
    <View
      style={{
        paddingTop: 15,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 5,
        paddingRight: 2,
      }}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, i) => (
        <Grid key={i} onPress={onPress} />
      ))}
    </View>
  );
}
