import { ViewProps as RNViewProps } from 'react-native';

import {
  BorderPropsType,
  SpacingPropsType,
  RoundedPropsType,
  ThemeColorType,
  ThemeSpacingType,
  ThemeFontSizeType,
} from '../Theme.type';

export declare type iconNameType =
  | 'view-dashboard'
  | 'credit-card'
  | 'earth'
  | 'bell'
  | 'dots-horizontal'
  | 'chevron-left'
  | 'search'
  | 'sound-mix'
  | 'check'
  | 'lock'
  | 'ios-eye'
  | 'ios-eye-off'
  | 'areachart'
  | 'database'
  | 'close'
  | 'camera'
  | 'map-pin'
  | 'user'
  | 'pencil'
  | 'chevron-right'
  | 'arrow-forward'
  | 'arrow-back'
  | 'settings'
  | 'setting'
  | 'location-arrow'
  | 'map-marker-alt'
  | 'enviroment'
  | 'minus'
  | 'cancel'
  | 'infocirlceo'
  | 'lock-open-outline'
  | 'shield'
  | 'fingerprint'
  | 'mail'
  | 'send'
  | 'info'
  | 'logout'
  | 'camera-alt'
  | 'phone'
  | 'gift'
  | 'water'
  | 'md-water'
  | 'anchor'
  | 'air-filter'
  | 'icloud'
  | 'wifi'
  | 'warning'
  | 'wifi-off'
  | 'closecircleo'
  | 'stop-circle'
  | 'globe'
  | 'map-marker'
  | 'appstore1'
  | 'plus'
  | 'ios-apps'
  | 'eraser'
  | 'browser'
  | 'like1'
  | 'like2'
  | 'hearto'
  | 'heart'
  | 'comment-outline'
  | 'plus-square'
  | 'dot-single'
  | 'lightbulb'
  | 'folder'
  | 'images'
  | 'compass'
  | 'flag'
  | 'building'
  | 'dots-vertical';

export declare type iconFontFamilyType =
  | 'AntDesign'
  | 'Entypo'
  | 'EvilIcons'
  | 'Feather'
  | 'FontAwesome'
  | 'FontAwesome5'
  | 'Foundation'
  | 'Ionicons'
  | 'MaterialIcons'
  | 'MaterialCommunityIcons'
  | 'Octicons'
  | 'Zocial'
  | 'Fontisto'
  | 'SimpleLineIcons';
export interface IconProps
  extends RNViewProps,
    BorderPropsType,
    SpacingPropsType,
    RoundedPropsType {
  h?: number;
  w?: number;
  minW?: number;
  minH?: number;
  maxH?: number;
  maxW?: number;
  bg?: ThemeColorType;
  name: iconNameType;
  color?: ThemeColorType;
  shadow?: number;
  shadowColor?: ThemeColorType;
  position?: 'absolute' | 'relaitve';
  top?: ThemeSpacingType | number;
  left?: ThemeSpacingType | number;
  right?: ThemeSpacingType | number;
  bottom?: ThemeSpacingType | number;
  fontFamily?: iconFontFamilyType;
  fontSize?: ThemeFontSizeType;
  zIndex?: number;
  opacity?: number;
  alignSelf?:
    | 'auto'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'baseline';
}
