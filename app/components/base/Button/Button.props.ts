import {
  TouchableHighlightProps as RNButtonProps,
  TextStyle,
  ViewStyle,
} from 'react-native';

import {
  BorderPropsType,
  SpacingPropsType,
  RoundedPropsType,
  ThemeColorType,
  ThemeFontSizeType,
  ThemeFontWeightType,
} from '../Theme.type';

export interface ButtonProps
  extends RNButtonProps,
    BorderPropsType,
    SpacingPropsType,
    RoundedPropsType {
  h?: number | string;
  w?: number | string;
  bg?: ThemeColorType;
  position?: 'absolute' | 'relative';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  alignSelf?:
    | 'auto'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'baseline';
  flexDir?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  fontWeight?: ThemeFontWeightType;
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  top?: number;
  flex?: number;
  left?: number;
  right?: number;
  bottom?: number;
  color?: ThemeColorType;
  loading?: boolean;
  disabled?: boolean;
  loaderColor?: ThemeColorType;
  minW?: number | string;
  minH?: number | string;
  fontSize?: number | ThemeFontSizeType;
  loaderSize?: number | ThemeFontSizeType;
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
  block?: boolean;
  shadow?: number;
  borderless?: boolean;
  rippleColor?: ThemeColorType;
  shadowColor?: ThemeColorType;
  ripple?: boolean;
  opacity?: number;
  zIndex?: number;
  onPress?: object;

  /* Text which is looked up via i18n */
  tx?: string;
  /**
   * Optional options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  txOptions?: object;

  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string;

  /**
   * Children components.
   */
  children?: React.ReactNode;

  /**
   * An optional style override useful for padding & margin.
   */

  type?: ViewStyle | ViewStyle[];

  /**
   * An optional style override useful for padding & margin.
   */
  textStyle?: TextStyle | TextStyle[];
}
