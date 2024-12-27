import React from 'react';
import {SvgXml} from 'react-native-svg';

interface Icon {
  icon: string;
  color?: string;
  size?: number;
}
export default function Icon(props: Icon) {
  const {icon, color, size} = props;
  return <SvgXml xml={icon} color={color} height={size || 24} />;
}
