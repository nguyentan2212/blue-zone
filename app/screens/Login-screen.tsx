import React, { FunctionComponent as Component, useState } from "react"
import { observer } from "mobx-react-lite"
import { ActivityIndicator, Dimensions, ImageBackground, KeyboardAvoidingView, StyleSheet, ViewStyle, Keyboard } from "react-native"
import { Block, Button, Typography, Input } from "../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"
import { color } from "../theme"
import { useNavigation } from "@react-navigation/native"
import { sizes } from "../theme/fonts/size"
import { useStores } from "../models"
const { height } = Dimensions.get('window')

import axios from 'axios'
import { returnAlert } from "../utils/alert"

const FLEX: ViewStyle = {
  flex: 1,
};

export const LoginScreen: Component = observer(function LoginScreen () {
  // Pull in one of our MST stores
  const { user } = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()

  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])
  const [loading, setLoading] = useState(false)
  const backgroundPath = require('../../assets/images/Vector.png')

  const hasErrors = key => errors.includes(key) ? styles.hasErrors : null

  const onChangePhone = (event) => {
    setPhone(event.nativeEvent.text)
  }

  const onChangePassword = (event) => {
    setPassword(event.nativeEvent.text)
  }

  const handleLogin = async () => {
    Keyboard.dismiss();
    setLoading(true)

    const result = await axios.post('http://localhost:1337/auth/local', {
      identifier: phone,
      password: password,
    });

    if (result) {
      console.log('Success')
      returnAlert.success('Đăng nhập thành công')
      user.login(result)
      setLoading(false)
    } else {
      returnAlert.error('Vui lòng thử lại sau');
    }

    navigation.replace('scan')
  }


  return (
    <KeyboardAvoidingView
      enabled
      style={FLEX}
    >
      {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
      <ImageBackground
        source={backgroundPath}
        style={{ width: '100%', height: '100%', overflow: 'visible' }}
      >
        <Block padding={56}>
          <Typography h1 light>ĐĂNG  NHẬP</Typography>
          <Block middle>
            <Input
              label='Phone'
              error={hasErrors('phone')}
              style={[styles.input, hasErrors('phone')]}
              onChange={onChangePhone}
            />
            <Block style={{ height: 32 }} />
            <Input
              secure
              label='Password'
              error={hasErrors('password')}
              style={[styles.input, hasErrors('password')]}
              // defaultValue={password}
              onChange={onChangePassword}
            />
            <Button color='#4ca3dd' onPress={() => handleLogin()}>
              {loading
                ? <ActivityIndicator size='small' />
                : <Typography bold white center>Tiếp tục</Typography>}
            </Button>
          </Block>
        </Block>
      </ImageBackground>
      {/* </TouchableWithoutFeedback> */}
    </KeyboardAvoidingView>
  )
})

const styles = StyleSheet.create({
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: color.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: 300,
    height: 32
  },
  login: {
    paddingHorizontal: sizes.base * 2,
    paddingTop: height / 15,
    flex: 1,
    justifyContent: 'center'
  },
  hasErrors: {
    borderBottomColor: color.accent
  }
})
