import React, {forwardRef, useImperativeHandle, useRef, useState} from 'react';

import BouncyCheckboxGroup, {
  ICheckboxButton,
} from 'react-native-bouncy-checkbox-group';

export interface GroupCheckBoxHandle {
  getCheckedBox: () => number;
}

interface Info {
  id: number;
  title?: string;
}

interface Props extends Omit<ICheckboxButton, 'id'> {
  data: Info[];
}

const GroupCheckBox = forwardRef<GroupCheckBoxHandle, Props>(
  ({data, ...rest}, ref) => {
    const [value, setValue] = useState<number>();

    useImperativeHandle(
      ref,
      () => ({
        getCheckedBox: () => value!,
      }),
      [value],
    );

    return (
      <BouncyCheckboxGroup
        data={data}
        onChange={(selectedItem: ICheckboxButton) => {
          setValue(selectedItem.id);
        }}
        {...rest}
      />
    );
  },
);

export default GroupCheckBox;
