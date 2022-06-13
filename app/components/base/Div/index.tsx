import React from 'react';
import { Div } from 'react-native-magnus';

import { DivProps } from './Div.props';

export const BaseDiv: React.FunctionComponent<DivProps> = props => {
  return <Div {...props}>{props.children}</Div>;
};
