import React from 'react';
import {SafeAreaView, View, FlatList} from 'react-native';
import {ScreenBaseProps} from '..';
import CommonStyles from '../../common/CommonStyles';
import Card from '../../components/Card';
import {useSelectModal} from '../../components/Modal/useSelectModal';
import styles from './styles';

interface Props extends ScreenBaseProps {}

function HomeScreen({}: Props) {
  const {open} = useSelectModal();

  const openModal = async () => {
    const b = await open();
    if (b.comfirm) {
      console.log(b.data.count);
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
