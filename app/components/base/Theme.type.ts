import { theme } from '@theme';

export type ThemeColorType = keyof typeof theme.colors;
export type ThemeSpacingType = keyof typeof theme.spacing;
export type ThemeBorderRadiusType = keyof typeof theme.borderRadius;
export type ThemeShadowType = keyof typeof theme.shadow;
export type ThemeShadowColorType =
  | keyof typeof theme.shadowColor
  | keyof typeof theme.colors;
export type ThemeFontSizeType = keyof typeof theme.fontSize;
export type ThemeFontWeightType =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | undefined;

export interface BorderPropsType {
  borderColor?: ThemeColorType;
  borderTopColor?: ThemeColorType;
  borderRightColor?: ThemeColorType;
  borderBottomColor?: ThemeColorType;
  borderLeftColor?: ThemeColorType;
  borderWidth?: number;
  borderTopWidth?: number;
  borderRightWidth?: number;
  borderLeftWidth?: number;
  borderBottomWidth?: number;
}
export interface SpacingPropsType {
  m?: number | ThemeSpacingType;
  mt?: number | ThemeSpacingType;
  mr?: number | ThemeSpacingType;
  mb?: number | ThemeSpacingType;
  ml?: number | ThemeSpacingType;
  mx?: number | ThemeSpacingType;
  my?: number | ThemeSpacingType;
  p?: number | ThemeSpacingType;
  pt?: number | ThemeSpacingType;
  pr?: number | ThemeSpacingType;
  pb?: number | ThemeSpacingType;
  pl?: number | ThemeSpacingType;
  px?: number | ThemeSpacingType;
  py?: number | ThemeSpacingType;
}
export interface RoundedPropsType {
  rounded?: ThemeBorderRadiusType | number;
  roundedTopLeft?: ThemeBorderRadiusType | number;
  roundedTopRight?: ThemeBorderRadiusType | number;
  roundedBottomLeft?: ThemeBorderRadiusType | number;
  roundedBottomRight?: ThemeBorderRadiusType | number;
  roundedTop?: ThemeBorderRadiusType | number;
  roundedLeft?: ThemeBorderRadiusType | number;
  roundedRight?: ThemeBorderRadiusType | number;
  roundedBottom?: ThemeBorderRadiusType | number;
}
export interface ShadowPropsType {
  shadow?: ThemeShadowType;
  shadowColor?: ThemeColorType;
}
