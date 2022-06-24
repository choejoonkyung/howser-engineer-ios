import React, {useLayoutEffect} from 'react';
import {SafeAreaView, View} from 'react-native';
import {ScreenBaseProps} from '..';
import CommonStyles from '../../common/CommonStyles';
import Icon from '../../components/Icon';
import styles from './styles';

interface Props extends ScreenBaseProps {}

function OutBoxDetail({navigation}: Props) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={CommonStyles.container}>
      <View style={styles.container}>
        <Icon
          name="Close"
          width={25}
          height={25}
          onPress={() => navigation.goBack()}
          style={styles.button}
        />
      </View>
    </SafeAreaView>
  );
}

export default OutBoxDetail;
