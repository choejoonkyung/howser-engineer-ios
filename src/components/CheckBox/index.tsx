import React, {forwardRef, useImperativeHandle, useRef, useState} from 'react';
import BouncyCheckbox, {
  IBouncyCheckboxProps,
} from 'react-native-bouncy-checkbox';

export interface CheckBoxHandle {
  getCheck: () => boolean;
}

interface Props extends IBouncyCheckboxProps {}

const CheckBox = forwardRef<CheckBoxHandle, Props>(({...rest}, ref) => {
  const [value, setValue] = useState(false);

  useImperativeHandle(
    ref,
    () => ({
      getCheck: () => value,
    }),
    [value],
  );

  return <BouncyCheckbox onPress={setValue} {...rest} />;
});

export default CheckBox;
