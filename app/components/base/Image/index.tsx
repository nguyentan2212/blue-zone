import React from 'react';
import { Image } from 'react-native-magnus';

import { ImageProps } from './Image.props';

export const BaseImage: React.FunctionComponent<ImageProps> = props => {
  return <Image {...props} resizeMode={props.resizeMode || 'contain'} />;
};
