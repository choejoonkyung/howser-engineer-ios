import React, {forwardRef, useImperativeHandle, useRef, useState} from 'react';
import {TextInput, TextInputProps} from 'react-native';

export interface InputHandle {
  getValue: () => string;
}

interface Props extends TextInputProps {}

const Input = forwardRef<InputHandle, Props>(({...rest}, ref) => {
  const [value, setValue] = useState('');

  useImperativeHandle(
    ref,
    () => ({
      getValue: () => value,
    }),
    [value],
  );

  return (
    <TextInput value={value} onChangeText={text => setValue(text)} {...rest} />
  );
});

export default Input;
