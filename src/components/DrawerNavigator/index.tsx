import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import {Text, View} from 'react-native';
import CommonStyles from '../../common/CommonStyles';
import styles from './styles';

function DrawerNavigator(props: DrawerContentComponentProps) {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView>
        <View style={styles.profileContainer}>
          <View style={styles.img} />
          <Text style={styles.nickname}>최준경</Text>
          <Text style={styles.email}>jkchoe@howser.co.kr</Text>
        </View>
        <View style={CommonStyles.divider}></View>
        <View style={styles.menus}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

export default DrawerNavigator;
