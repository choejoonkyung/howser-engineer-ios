import React from 'react';
import {Button, Text, View} from 'react-native';
import CommonStyles from '../../common/CommonStyles';
import {useOpenModal} from '../Modal/useOpenModal';
import styles from './styles';

interface Props {
  title: string;
  desc: string;
  onPress: () => void;
  onPress2: () => void;
}

function Card({title, desc, onPress, onPress2}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.descContainer}>
        <Text numberOfLines={2} style={styles.desc}>
          {desc}
        </Text>
      </View>
      <View style={CommonStyles.divider} />
      <View style={CommonStyles.flex}>
        <Button title="인풋 모달" onPress={onPress} />
        <Button title="체크박스 모달" onPress={onPress2} />
      </View>
    </View>
  );
}

export default Card;
