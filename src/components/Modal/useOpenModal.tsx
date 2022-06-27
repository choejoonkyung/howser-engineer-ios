import React, {useCallback, useMemo} from 'react';
import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import {useModal} from './useModal';

interface Data {
  arr: number[];
}

export function useOpenModal() {
  const {open} = useModal();

  const openModal = useCallback(() => {
    return open<Data>(({onConfirm, onCancel}) => {
      return (
        <Modal animationType="slide" transparent={true}>
          <View style={modalStyles.centeredView}>
            <View style={modalStyles.modalView}>
              <Text style={modalStyles.modalText}>모달테스트입니다.</Text>
              <View style={modalStyles.buttons}>
                <Pressable
                  style={[modalStyles.button, modalStyles.buttonClose]}
                  onPress={() => onCancel()}>
                  <Text style={modalStyles.textStyle}>닫기</Text>
                </Pressable>
                <Pressable
                  style={[modalStyles.button, modalStyles.buttonOpen]}
                  onPress={() =>
                    onConfirm({
                      arr: [1, 2, 3],
                    })
                  }>
                  <Text style={modalStyles.textStyle}>수락</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      );
    });
  }, [open]);

  return useMemo(() => ({open: openModal}), [openModal]);
}

const modalStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#bbb',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
  },
});
