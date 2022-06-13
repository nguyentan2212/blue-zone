import { ViewProps as RNViewProps } from 'react-native';
import {
  SpacingPropsType,
  RoundedPropsType,
  ThemeColorType,
} from '../Theme.type';
export interface SkeletonProps
  extends RNViewProps,
    SpacingPropsType,
    RoundedPropsType {
  bg?: ThemeColorType;
  h?: number | string;
  w?: number | string;
  flex?: number;
}
