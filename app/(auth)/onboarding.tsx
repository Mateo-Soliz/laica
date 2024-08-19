import { StyleSheet, Text } from "react-native";
import React from "react";
import { Button, Carousel } from "react-native-ui-lib";
import { View } from "react-native-ui-lib";
import { Dimensions } from "react-native";
import { Image } from "expo-image";
import normalize from "@/utils/normalize";
import { Eye, LogoText } from "@/assets/images/svg";
import { Colors } from "@/constants";
import LeanText from "@/components/lean-text";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
const DATA = [
  {
    uri: require("@/assets/images/carousel/Foto1.png"),
    text: "Cuidar de tu mascota nunca fue tan fácil.",
    subText: "Optimiza su salud y felicidad desde tu móvil.",
  },
  {
    uri: require("@/assets/images/carousel/Foto2.png"),
    text: "Monitorea su bienestar diariamente",
    subText: "Comunica a tu veterinario toda la información necesaria.",
  },
  {
    uri: require("@/assets/images/carousel/Foto3.png"),
    text: "Sigue cada paso de tu compañero",
    subText: "Obtén detalles sobre su actividad y estado de ánimo.",
  },
];
const OnBoarding = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  return (
    <View flex spread centerV backgroundColor={Colors.defaultBG}>
      <StatusBar style="light" />
      <Carousel
        containerStyle={{
          flex: 1,
        }}
        pagingEnabled
        initialPage={0}
        autoplay={false}
        onScroll={(event) => {
          const contentOffsetX = event.nativeEvent.contentOffset.x;
          const index = Math.round(
            contentOffsetX / Dimensions.get("window").width
          );
          setCurrentIndex(index);
        }}
      >
        {DATA.map((item, index) => (
          <View flex key={index}>
            <Image
              source={item.uri}
              style={StyleSheet.absoluteFillObject}
              contentFit="cover"
            />
            <View
              center
              gap-8
              style={{
                marginTop: normalize(530, "height"),
                marginHorizontal: normalize(16),
                paddingHorizontal: normalize(16),
              }}
            >
              <LeanText bold center Colors={Colors.shades05} h1>
                {item?.text}
              </LeanText>
              <LeanText center Colors={Colors.shades05} subHead>
                {item?.subText}
              </LeanText>
            </View>
          </View>
        ))}
      </Carousel>
      <View
        center
        row
        style={{
          position: "absolute",
          bottom: normalize(152, "height"),
          width: "100%",
        }}
      >
        {DATA.map((_, index) => (
          <View
            key={index}
            width={normalize(index === currentIndex ? 32 : 8)}
            height={normalize(8)}
            backgroundColor={
              currentIndex === index ? Colors.shades05 : Colors.neutral1
            }
            marginR-4
            br100
          />
        ))}
      </View>
      <View
        center
        style={{
          width: "100%",
          position: "absolute",
          top: normalize(46, "height"),
          zIndex: 9999,
        }}
      >
        <LogoText />
      </View>
      <View
      center
      style={{
        position: "absolute",
        bottom: normalize(40, "height"),
        width: "100%",
        
        paddingHorizontal: normalize(16),

      }}
      >
        <Button
          label="Empezar ahora"
          onPress={() => {
            router.push("/(auth)/(register)/register-screen")
          }}
          labelStyle={{
            color:Colors.shades05,
          }}
        
          style={{
            alignSelf: "center",
            height: normalize(42, "height"),
            width: "100%",
            borderRadius: normalize(32, "height"),
          }}
          backgroundColor={Colors.primary7}
        />

      </View>
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
