import { TextInputProps as RNTextInputProps } from 'react-native';
import {
  ThemeSpacingType,
  ThemeColorType,
  ThemeBorderRadiusType,
} from '../Theme.type';

export interface TextInputProps extends RNTextInputProps {
  h?: number;
  w?: number;
  m?: ThemeSpacingType;
  p?: ThemeSpacingType;
  borderColor?: ThemeColorType;
  focusBorderColor?: ThemeColorType;
  borderWidth?: number;
  borderRadius?: ThemeBorderRadiusType | number;
  minW?: number | string;
  minH?: number | string;
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
}
