import React, {useCallback, useMemo, useRef, useState} from 'react';
import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import CheckBox, {CheckBoxHandle} from '../CheckBox';
import GroupCheckBox, {GroupCheckBoxHandle} from '../CheckBox/GroupCheckBox';
import {useModal} from './useModal';

interface Data {
  bool?: boolean;
  id?: number;
}

interface Props {
  title: string;
}

export function useCheckBoxModal({title}: Props) {
  const {open} = useModal();
  const ref = useRef<CheckBoxHandle>(null);
  const ref2 = useRef<GroupCheckBoxHandle>(null);

  const openModal = useCallback(() => {
    return open<Data>(({onConfirm, onCancel}) => {
      return (
        <Modal animationType="fade" transparent={true}>
          <View style={modalStyles.centeredView}>
            <View style={modalStyles.modalView}>
              <Text style={modalStyles.modalText}>{title}</Text>

              <CheckBox ref={ref} />
              <GroupCheckBox
                ref={ref2}
                data={[
                  {
                    id: 0,
                  },
                  {
                    id: 1,
                  },
                  {
                    id: 2,
                  },
                  {
                    id: 3,
                  },
                ]}
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
                      bool: ref.current?.getCheck(),
                      id: ref2.current?.getCheckedBox(),
                    });
                  }}>
                  <Text style={modalStyles.textStyle}>확인</Text>
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
    marginTop: 40,
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
    width: '60%',
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
    justifyContent: 'space-between',
    width: '100%',
  },
});
