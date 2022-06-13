import { Dimensions } from 'react-native';
import { getStatusBarHeight, isIphoneX } from 'react-native-magnus';
import { isAndroid } from './Platform';

export const DEVICE = {
  WIDTH_SCREEN: Dimensions.get('screen').width,
  HEIGHT_SCREEN: Dimensions.get('screen').height,
  WIDTH_WINDOW: Dimensions.get('window').width,
  HEIGHT_WINDOW: Dimensions.get('window').height,
};

export const HEIGHT_STATUS_BAR = getStatusBarHeight(true);
export const HEIGHT_DEFAULT_NAVBAR = 60;
export const HEIGHT_BODY_NO_TAB =
  DEVICE.HEIGHT_WINDOW - HEIGHT_STATUS_BAR - HEIGHT_DEFAULT_NAVBAR;
export const HEIGHT_BODY = HEIGHT_BODY_NO_TAB - 34;
export const PADDING_BOTTOM_TAB = isIphoneX() ? 210 : isAndroid ? 175 : 165;
