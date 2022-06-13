import { TextInputProps as RNTextInputProps } from 'react-native';

import {
  BorderPropsType,
  SpacingPropsType,
  RoundedPropsType,
  ThemeColorType,
  ThemeFontSizeType,
  ThemeFontWeightType,
} from '../Theme.type';

export interface InputProps
  extends RNTextInputProps,
    BorderPropsType,
    SpacingPropsType,
    RoundedPropsType {
  h?: number;
  w?: number;
  minH?: number;
  minW?: number;
  maxH?: number;
  maxW?: number;
  bg?: ThemeColorType;
  fontSize?: ThemeFontSizeType;
  fontWeight?: ThemeFontWeightType;
  fontFamily?: string;
  lineHeight?: number;
  color?: ThemeColorType;
  loading?: boolean;
  loaderSize?: number | ThemeFontSizeType;
  loaderColor?: ThemeColorType;
  shadow?: number;
  flex?: number;
  shadowColor?: ThemeColorType;
  focusBorderColor?: ThemeColorType;
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
  zIndex?: number;
  opacity?: number;
  style?: object;
}
