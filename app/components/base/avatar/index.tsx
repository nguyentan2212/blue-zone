import React, { useState } from 'react';
import { Platform, ActivityIndicator } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import FastImage from 'react-native-fast-image';
import { Button, Avatar, Icon } from 'react-native-magnus';
import { BaseDiv } from '@components/base';
import { color } from '@theme';
import { useUploadFile, ResponseUploadFileProps } from '@hooks';
import { scale } from '@utils/helper';

const options = {
  title: 'Select Avatar',
  noData: true,
  quality: 0.5,
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

type IProps = {
  value?: number;
  onChange?: (id: number) => void;
  avatarUrl?: string;
  readonly?: boolean;
  onCreated?: () => void;
  size: number;
  rounded?: string | number;
};

const CZuumAvatar: React.FC<IProps> = ({
  value,
  onChange,
  avatarUrl,
  onCreated,
  readonly = false,
  size = 90,
  rounded = 'circle',
}) => {
  const [avatarSource, setAvatarSource] = useState<string>(avatarUrl);

  const _handleUploadDone = (response: ResponseUploadFileProps) => {
    onChange(response.id);
    onCreated();
  };

  const [{ isLoading }, _uploadImage] = useUploadFile(_handleUploadDone);

  const _handleImagePicker = () => {
    ImagePicker.showImagePicker(options, async response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setAvatarSource(response.uri);
        response.uri =
          Platform.OS === 'ios'
            ? response.uri.replace('file://', '')
            : response.uri;
        await _uploadImage(response);
      }
    });
  };

  const _renderAvatar = React.useMemo(() => {
    if (avatarSource?.includes('https://')) {
      return (
        <FastImage
          style={{
            width: scale(size),
            height: scale(size),
            borderRadius:
              typeof rounded === 'string' ? scale(size / 2) : rounded,
          }}
          {...(avatarSource && {
            source: { uri: avatarSource, priority: FastImage.priority.high },
          })}
        />
      );
    }
    return (
      <Avatar
        p="none"
        size={scale(size)}
        bg="backgroundBlur"
        {...(avatarSource && { source: { uri: avatarSource } })}
        zIndex={999}
      >
        <Icon name="user" fontSize="H600" color="primary" />
      </Avatar>
    );
  }, [avatarSource, rounded, size]);

  if (readonly) return _renderAvatar;

  return (
    <BaseDiv
      w={scale(size)}
      h={scale(size)}
      alignItems="center"
      justifyContent="center"
      rounded={rounded}
    >
      <Button
        onPress={_handleImagePicker}
        w={scale(size)}
        h={scale(size)}
        rounded={scale(size / 2)}
        disabled={isLoading}
        alignItems="center"
        justifyContent="center"
      >
        {_renderAvatar}
      </Button>
      {isLoading && (
        <BaseDiv
          position="absolute"
          w={scale(size)}
          h={scale(size)}
          alignItems="center"
          justifyContent="center"
        >
          <ActivityIndicator size="large" animating color={color.primary} />
        </BaseDiv>
      )}
      <BaseDiv
        position="absolute"
        bottom={0}
        right={0}
        rounded={rounded}
        borderColor="white"
        borderWidth={2}
      >
        <Icon
          name="camera"
          color="white"
          fontSize="H300"
          bg="primary"
          rounded={rounded}
          p={4}
        />
      </BaseDiv>
    </BaseDiv>
  );
};

export const ZuumAvatar = React.memo(CZuumAvatar);

export default React.memo(CZuumAvatar);
