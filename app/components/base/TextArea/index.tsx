import React from 'react';
import { Textarea } from 'react-native-magnus';

import { TextInputProps } from './TextArea.props';

// import {TextProps} from '@types';

export const BaseTextArea: React.FunctionComponent<TextInputProps> = props => {
  return (
    <Textarea p="md" {...props}>
      {props.children}
    </Textarea>
  );
};
