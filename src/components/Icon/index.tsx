import React from 'react';
import {SvgProps} from 'react-native-svg';
import * as svg from './svg';

type IconType = keyof typeof svg;
interface Props extends SvgProps {
  name: IconType;
}

function Icon({name, ...rest}: Props) {
  const I = svg[name];
  return <I {...rest} />;
}

export default Icon;
