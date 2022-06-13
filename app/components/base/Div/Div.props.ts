import { ViewProps as RNViewProps, ImageSourcePropType } from 'react-native';

import {
  BorderPropsType,
  SpacingPropsType,
  RoundedPropsType,
  ShadowPropsType,
  ThemeColorType,
} from '../Theme.type';

export interface DivProps
  extends RNViewProps,
    BorderPropsType,
    SpacingPropsType,
    RoundedPropsType,
    ShadowPropsType {
  h?: number | string;
  w?: number | string;
  bg?: ThemeColorType;
  minH?: number;
  minW?: number;
  maxH?: number;
  maxW?: number;
  bgImg?: ImageSourcePropType;
  bgMode?: 'contain' | 'cover' | 'stretch';
  flex?: number;
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignSelf?:
    | 'auto'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'baseline';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  flexDir?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  position?: 'absolute' | 'relative';
  overflow?: 'hidden' | 'visible' | 'scroll';
  borderStyle?: 'solid' | 'dotted' | 'dashed';
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  opacity?: number;
  children?: React.ReactNode[] | React.ReactNode;
  row?: boolean;
  zIndex?: number;
  borderRadius?: string | number | symbol;
}
