import * as React from 'react';
import { BaseText } from './TextBase';
import { TextProps } from './Text.props';
import { translate } from '@i18n';

export const TextLabel = (props: TextProps) => {
  const {
    tx,
    txOptions,
    text,
    children,
    style: styleOverride,
    fontWeight = '600',
    fontSize = 'H200',
    color = 'titleCard',
    ...rest
  } = props;
  // figure out which content to use
  const i18nText = tx && translate(tx, txOptions);
  const content = i18nText || text || children;
  return (
    <BaseText
      fontWeight={fontWeight}
      color={color}
      fontSize={fontSize}
      {...rest}
      style={styleOverride}
    >
      {content}
    </BaseText>
  );
};
