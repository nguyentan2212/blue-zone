import { TextProps as RNTextProps, TextStyle } from 'react-native';

import {
  BorderPropsType,
  SpacingPropsType,
  RoundedPropsType,
  ThemeColorType,
  ThemeFontSizeType,
  ThemeFontWeightType,
} from '../Theme.type';

export interface TextProps
  extends RNTextProps,
    BorderPropsType,
    SpacingPropsType,
    RoundedPropsType {
  p?: any;
  h?: number | string;
  w?: number | string;
  bg?: ThemeColorType;
  flex?: number;
  minH?: number | string;
  minW?: number | string;
  maxH?: number | string;
  maxW?: number | string;
  color?: ThemeColorType;
  fontSize?: ThemeFontSizeType;
  fontWeight?: ThemeFontWeightType;
  textDecorLine?:
    | 'none'
    | 'underline'
    | 'line-through'
    | 'underline line-through';
  textDecorStyle?: 'solid' | 'double' | 'dotted' | 'dashed';
  fontStyle?: 'normal' | 'italic';
  textDecorColor?: ThemeColorType;
  lineHeight?: number | string;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
  letterSpacing?: number;
  opacity?: number;
  overflow?: 'hidden' | 'visible' | 'scroll';
  textAlignVertical?: 'auto' | 'top' | 'bottom' | 'center';
  zIndex?: number;
  style?: TextStyle | TextStyle[];

  // Custom

  /**
   * Children components.
   */
  children?: React.ReactNode;

  /**
   * Text which is looked up via i18n.
   */
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
}
