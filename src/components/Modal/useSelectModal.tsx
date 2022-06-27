import React, {useCallback, useMemo, useRef} from 'react';
import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import Input, {InputHandle} from '../Input';
import {useModal} from './useModal';

interface Data {
  count: string;
}

export function useSelectModal() {
  const {open} = useModal();
  const ref = useRef<InputHandle>(null);

  const openModal = useCallback(() => {
    return open<Data>(({onConfirm, onCancel}) => {
      return (
        <Modal animationType="slide" transparent={true}>
          <View style={modalStyles.centeredView}>
            <View style={modalStyles.modalView}>
              <Text style={modalStyles.modalText}>신청 층수 직접 입력</Text>
              <Input
                ref={ref}
                style={modalStyles.input}
                placeholder="Enter your name"
              />

              <View style={modalStyles.buttons}>
                <Pressable
                  style={[modalStyles.button, modalStyles.buttonClose]}
                  onPress={() => onCancel()}>
                  <Text style={modalStyles.textStyle}>닫기</Text>
                </Pressable>
                <Pressable
                  style={[modalStyles.button, modalStyles.buttonOpen]}
                  onPress={() => {
                    onConfirm({
                      count: ref.current?.getValue()!,
                    });
                  }}>
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
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
