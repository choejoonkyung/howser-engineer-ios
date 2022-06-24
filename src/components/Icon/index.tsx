import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {SvgProps} from 'react-native-svg';
import * as svg from './svg';

type IconType = keyof typeof svg;
interface Props extends SvgProps, Pick<TouchableOpacityProps, 'onPress'> {
  name: IconType;
}

function Icon({name, onPress, ...rest}: Props) {
  const I = svg[name];
  return (
    <TouchableOpacity onPress={onPress}>
      <I {...rest} />
    </TouchableOpacity>
  );
}

export default Icon;
