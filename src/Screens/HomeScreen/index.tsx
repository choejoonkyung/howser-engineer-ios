import React from 'react';
import {SafeAreaView, View, FlatList} from 'react-native';
import {ScreenBaseProps} from '..';
import CommonStyles from '../../common/CommonStyles';
import Card from '../../components/Card';
import {useInputModal} from '../../components/Modal/useInputModal';
import styles from './styles';

interface Props extends ScreenBaseProps {}

function HomeScreen({}: Props) {
  const {open} = useInputModal({
    title: '층수를 직접 입력해주세요.',
    placeHolder: 'e.g. 12층',
  });

  const openModal = async () => {
    const result = await open();
    if (result.comfirm) {
      console.log('floor:', result.data.floor);
    }
  };

  return (
    <SafeAreaView style={CommonStyles.container}>
      <View style={styles.list}>
        <FlatList
          data={new Array(8)}
          renderItem={({index}) => (
            <Card
              title={`제목입니다 #${index + 1}`}
              desc="설명입니다.설명입니다.설명입니다.설명입니다.설명입니다.설명입니다.설명입니다.설명입니다.설명입니다.설명입니다.설명입니다.설명입니다.설명입니다.설명입니다."
              onPress={() => openModal()}
            />
          )}
          ItemSeparatorComponent={() => <View style={CommonStyles.separator} />}
        />
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
