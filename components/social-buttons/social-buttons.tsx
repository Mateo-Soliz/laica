import React from "react";
import { Platform, View } from "react-native";

import { Image, TouchableOpacity } from "react-native-ui-lib";

import { Colors } from "@/constants";
import normalize from "@/utils/normalize";
import { AppleIcon, FacebookIcon, GoogleIcon } from "@/assets/images/svg";
import LeanText from "@/components/lean-text";
const noFunction = () => {
  console.log("No function");
};

const SocialButtons = () => {
  const SOCIAL_BUTTONS = [
    {
      icon: <GoogleIcon />,
      title: "Continuar con Google",
      func: noFunction,
    },
    ...(Platform.OS == "ios"
      ? [
          {
            title: "Continuar con Apple",
            icon: <AppleIcon />,
            func: noFunction,
          },
        ]
      : []),
    {
      icon: <FacebookIcon />,
      title: "Continuar con Facebook",
      func: noFunction,
    },
  ];

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        gap: normalize(8, "height"),
      }}
    >
      {SOCIAL_BUTTONS.map((button, index) => (
        <TouchableOpacity
          key={index}
          style={{
            borderWidth: 1,
            borderColor: Colors.neutral5,
            borderRadius: normalize(48),
            paddingHorizontal: normalize(24),
            paddingVertical: normalize(12, "height"),
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            gap: normalize(10),
          }}
          onPress={button.func}
        >
          {button.icon}
          <LeanText body semiBold Colors={Colors.neutral9}>
            {button.title}
          </LeanText>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default SocialButtons;
