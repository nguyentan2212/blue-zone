import React from 'react';
import { TextInput as RNTextInput } from 'react-native';
import { Input } from 'react-native-magnus';

import { InputProps } from './Input.props';

export const BaseInput = React.forwardRef<RNTextInput, InputProps>(
  (props, ref) => {
    return <Input ref={ref} {...props} />;
  }
);

BaseInput.displayName = 'BaseInput';
