import React from 'react';
import { Button } from 'react-native-magnus';
import { ButtonProps } from './Button.props';
import { Text } from '@components/Text';

export const BaseButton: React.FunctionComponent<ButtonProps> = props => {
  const {
    rounded = 8,
    bg = 'primary',
    p = 16,
    tx,
    text,
    txOptions,
    textStyle,
    ...otherProps
  } = props;

  const content = props.children || (
    <Text
      {...otherProps}
      tx={tx}
      text={text}
      color={props.color}
      style={textStyle}
      txOptions={txOptions}
    />
  );

  return (
    <Button {...otherProps} p={p} rounded={rounded} bg={bg}>
      {content}
    </Button>
  );
};
