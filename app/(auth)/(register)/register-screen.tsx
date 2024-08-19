import { StyleSheet } from "react-native";
import React from "react";
import { View } from "react-native-ui-lib";
import LeanText from "@/components/lean-text";
import { Logo } from "@/assets/images/svg";
import ScreenView from "@/components/screen-view/screen-view";
import { Colors } from "@/constants";
import { Button } from "react-native-ui-lib";
import { router } from "expo-router";
import normalize from "@/utils/normalize";
import SocialButtons from "@/components/social-buttons/social-buttons";
const RegisterScreen = () => {
  return (
    <ScreenView backgroundColor="#F9FAFA">
      <View
        style={{
          paddingHorizontal: normalize(16),
          flex: 1,
        }}
      >
        <View style={{ gap: normalize(8, "height") }}>
          <Logo />
          <LeanText Colors={Colors.neutral7}>Bienvenido a Laica.</LeanText>
          <LeanText center h1 Colors={Colors.neutral9}>
            Inicia sesión o regístrate
          </LeanText>
        </View>
        <View>
          <Button
            onPress={() => {}}
            labelStyle={{
              color: Colors.shades05,
            }}
            style={{
              alignSelf: "center",
              height: normalize(48, "height"),
              width: "100%",
              borderRadius: normalize(32, "height"),
            }}
            backgroundColor={Colors.primary7}
          >
            <LeanText semiBold body>
              Continuar
            </LeanText>
          </Button>
        </View>

        <LeanText
          style={{
            width: "100%",
            textAlign: "center",
          }}
          semiBold
          callout
          Colors={Colors.neutral7}
        >
          O
        </LeanText>
        <View>
          <SocialButtons />
        </View>
        <LeanText center caption1 Colors={Colors.neutral7}
        style={{
            position: "absolute",
            bottom: normalize(16, "height"),
            textAlign: "center",
            left: normalize(16),
            right: normalize(16),
        }}
        >
          Al registrarte estás creando una cuenta de Laica y estás de acuerdo
          con nuestros Términos y condiciones y nuestra Política de privacidad.
          🔒
        </LeanText>
      </View>
    </ScreenView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
