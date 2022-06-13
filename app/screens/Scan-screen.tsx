import React, { FunctionComponent as Component, useState } from "react"
import { observer } from "mobx-react-lite"
import { Dimensions, Image, ImageBackground, StyleSheet } from "react-native"
import { Block, Button, Typography } from "../components"
import { AnimatedCircularProgress } from "react-native-circular-progress"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"
import { color } from "../theme"
import { sizes } from "../theme/fonts/size"
import { ScrollView } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window")
const backgroundPath = require("../../assets/images/Vector.png")

import { BleManager } from 'react-native-ble-plx';
import { useStores } from "../models"


const icons = {
  online: require("../../assets/icons/online.png"),
  offline: require("../../assets/icons/offline.png"),
}

export const ScanScreen: Component = observer(function ScanScreen () {
  const [isOn, setIsOn] = useState(false)
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  const [connected, setConnected] = useState(false)

  const { user } = useStores()


  const manager = new BleManager()

  const initial = () => {
    const subscription = manager.onStateChange((state) => {
      if (state === 'PoweredOn') {
        scanAndConnect();
        subscription.remove();
      }
    }, true);
  }

  const handleScan = () => {
    setConnected(!connected)
    setIsOn(!isOn)
    initial()
  }

  const scanAndConnect = () => {
    manager.startDeviceScan(null, null, (error, device) => {
      if (error) {
        // Handle error (scanning will be stopped automatically)
        console.log(error)
        return
      }

      // Check if it is a device you are looking for based on advertisement data
      // or other criteria.
      if (device.name === 'TI BLE Sensor Tag' ||
        device.name === 'SensorTag') {

        // Stop scanning as it's not necessary if you are scanning for one device.
        manager.stopDeviceScan();

      // Proceed with connection.
      }
    });
  }


  return !isOn ? (
    <ScrollView style={{ padding: sizes.padding }} showsVerticalScrollIndicator={false}>
      <Block center>
        <Block flex={1} style={{ paddingTop: 100 }}>
          <Typography h1 light>
            Cộng đồng BlueZone
        </Typography>
        </Block>

        <Block
          center
          flex={2}
          style={{ marginBottom: 0, marginLeft: 50, marginRight: 50, marginTop: 48 }}
        >
          <Image style={styles.image} source={icons[connected ? "online" : "offline"]} />

          <Button color="#4ca3dd" shadow onPress={() => handleScan()}>
            <Typography caption center bold white={!connected}>
              {connected ? "NGƯNG KẾT NỐI" : "BẮT ĐẦU QUÉT"}
            </Typography>
          </Button>
        </Block>
      </Block>
    </ScrollView>
  ) : (
      <ImageBackground
        source={backgroundPath}
        style={{ width: "100%", height: "100%", overflow: "visible" }}
      >
        <ScrollView style={{ padding: sizes.padding }} showsVerticalScrollIndicator={false}>
          <Block style={styles.dashboard}>
            <Block flex={false} row center space="between" style={styles.header}>
              <Typography light>Cộng đồng</Typography>
              <Typography h1>BlueZone</Typography>
              <Image style={styles.image1} source={icons[connected ? "online" : "offline"]} />
            </Block>
            <Block center>
              <AnimatedCircularProgress
                size={150} // can use  with * .5 => 50%
                fill={100} // percentage
                lineCap="round" // line ending style
                arcSweepAngle={360}
                width={sizes.base}
                tintColor={color.primary} // gradient is not supported :(
                backgroundColor={color.gray2}
                backgroundWidth={sizes.base / 2}
              >
                {() => (
                  <Block center middle>
                    <Typography h3 small>
                      {user.contacts.length} người
                </Typography>
                    <Typography h3 small>
                      tiếp xúc gần
                </Typography>
                  </Block>
                )}
              </AnimatedCircularProgress>
              <Block padding={10} />
              {/* <AnimatedCircularProgress
                size={150} // can use  with * .5 => 50%
                fill={100} // percentage
                lineCap="round" // line ending style
                arcSweepAngle={360}
                width={sizes.base}
                tintColor={color.primaryDarker} // gradient is not supported :(
                backgroundColor={color.gray2}
                backgroundWidth={sizes.base / 2}
              >
                {() => (
                  <Block center middle>
                    <Typography h3 small>
                      3 người
                </Typography>
                    <Typography h3 small>
                      tiếp xúc
                </Typography>
                  </Block>
                )}
              </AnimatedCircularProgress> */}
            </Block>

            <Block row center space="between" style={{ paddingTop: sizes.padding }}>
              <Typography size={18} center light>
                Mã người tiếp xúc
              <Typography size={20} spacing={1} color="#4ca3dd">
                  &nbsp;&nbsp; {user.contacts[0].id}
                </Typography>
              </Typography>
            </Block>
          </Block>
        </ScrollView>
      </ImageBackground>
    )
})

const styles = StyleSheet.create({
  connect: {
    width: sizes.base / 2,
  },
  connected: {
    borderColor: color.black,
  },
  image: {
    width: 180,
    height: 180,
    marginVertical: 20,
  },
  image1: {
    width: 50,
    height: 50,
    top: -50,
    left: width - 110,
  },
  status: {
    width: sizes.base,
    height: sizes.base,
    marginLeft: sizes.base,
  },
  dashboard: {
    flex: 1,
    padding: sizes.base * 2,
    marginBottom: sizes.base * 6,
  },
  header: {
    paddingTop: height / 15,
  }
})
