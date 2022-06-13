import React from 'react';
import { TextStyle, Platform } from 'react-native';
import { Text } from 'react-native-magnus';

import { TextProps as CustomTextProps } from './Text.props';

const CUSTOM_FONT_TEXT: TextStyle = {
  fontFamily: Platform.select({
    ios: 'Muli-Regular', // The font family name
    android: 'Muli-Regular', // The file name
  }),
};

export const BaseText: React.FunctionComponent<CustomTextProps> = props => {
  return (
    <Text {...props} style={{ ...CUSTOM_FONT_TEXT, ...props.style }}>
      {props.children}
    </Text>
  );
};
