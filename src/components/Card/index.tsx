import React from 'react';
import {Button, Text, View} from 'react-native';
import CommonStyles from '../../common/CommonStyles';
import styles from './styles';

interface Props {
  title: string;
  desc: string;
}

function Card({title, desc}: Props) {
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
      <Button title="Action" />
    </View>
  );
}

export default Card;
