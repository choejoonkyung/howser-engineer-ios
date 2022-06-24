import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import React from 'react';
import {Text, View} from 'react-native';

function MenuDrawer(props: DrawerContentComponentProps) {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <Text style={{color: '#111'}}>메뉴입니다.</Text>
      </DrawerContentScrollView>
    </View>
  );
}

export default MenuDrawer;
