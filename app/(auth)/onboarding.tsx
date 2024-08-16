import { StyleSheet, Text } from "react-native";
import React from "react";
import { Carousel } from "react-native-ui-lib";
import { View } from "react-native-ui-lib";
import { Dimensions } from "react-native";
import { Image } from "expo-image";
import normalize from "@/utils/normalize";
import {Colors} from "@/constants"
const OnBoarding = () => {
  return (
    <View flex spread centerV
    backgroundColor={Colors.defaultBG}
    >
      <Carousel
        containerStyle={{
          flex: 1,
        }}
        initialPage={0}
        itemSpacings={0}
        loop
        autoplay={false} // Si no quieres que se mueva automáticamente
        onChangePage={(index) => console.log("Página actual:", index)}
      >
        <Image
          source={require("@/assets/images/carousel/Foto1.png")}
          style={{
            flex: 1,
          }}
          /* content:all  */
          contentFit="cover"
        />

        <Image
          source={require("@/assets/images/carousel/Foto2.png")}
          style={{ flex: 1 }}
          contentFit="cover"
        />
        <Image
          source={require("@/assets/images/carousel/Foto3.png")}
          style={{ flex: 1 }}
          contentFit="cover"
        />
      </Carousel>
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
