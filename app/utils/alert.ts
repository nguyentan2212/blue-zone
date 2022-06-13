import { showMessage } from 'react-native-flash-message';
import { Alert } from 'react-native';

export const returnAlert = {
  error: (title?: string, message?: string) => {
    showMessage({
      icon: 'danger',
      message: title,
      description: message,
      type: 'danger',
    });
  },
  success: (title?: string, message?: string) => {
    showMessage({
      icon: 'success',
      message: title,
      description: message,
      type: 'success',
    });
  },
  warning: (title?: string, message?: string) => {
    showMessage({
      icon: 'warning',
      message: title,
      description: message,
      type: 'warning',
    });
  },
  info: (title?: string, message?: string) => {
    showMessage({
      icon: 'info',
      message: title,
      description: message,
      type: 'info',
    });
  },
};

type PropAlert = {
  title: string;
  message?: string;
  cancelable?: boolean;
  onPress?: () => void;
  cancelText?: string;
  confirmText?: string;
};

export const utilShowAlert = ({
  title,
  message,
  cancelable = true,
  onPress = Function,
  cancelText = 'Hủy',
  confirmText = 'Xác nhận',
}: PropAlert) => {
  Alert.alert(
    title,
    message,
    cancelable
      ? [
          {
            text: cancelText,
            style: 'destructive',
          },
          {
            text: confirmText,
            style: 'default',
            onPress,
          },
        ]
      : [
          {
            text: confirmText,
            style: 'default',
            onPress,
          },
        ],
    { cancelable: true }
  );
};
