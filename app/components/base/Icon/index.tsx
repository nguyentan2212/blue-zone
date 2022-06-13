import React from 'react';
import { Icon } from 'react-native-magnus';

import { IconProps } from './Icon.props';

export const BaseIcon: React.FunctionComponent<IconProps> = props => {
  return <Icon {...props} />;
};
