import React from 'react';
import {SafeAreaView, View, FlatList} from 'react-native';
import {ScreenBaseProps} from '..';
import CommonStyles from '../../common/CommonStyles';
import Card from '../../components/Card';
import styles from './styles';

interface Props extends ScreenBaseProps {}

function HomeScreen({}: Props) {
  return (
    <SafeAreaView style={CommonStyles.container}>
      <View style={styles.list}>
        <FlatList
          data={new Array(8)}
          renderItem={({index}) => (
            <Card
              title={`제목입니다 #${index + 1}`}
              desc="설명입니다.설명입니다.설명입니다.설명입니다.설명입니다.설명입니다.설명입니다.설명입니다.설명입니다.설명입니다.설명입니다.설명입니다.설명입니다.설명입니다."
            />
          )}
          ItemSeparatorComponent={() => <View style={CommonStyles.separator} />}
        />
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
