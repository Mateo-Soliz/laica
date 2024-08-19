import React, { useEffect } from "react";

import { useFonts } from "expo-font";

import {
  ThemeManager,
  Typography,
  Colors as UColors,
} from "react-native-ui-lib";
import { Colors, Fonts } from "@/constants";
interface ThemeProviderProps {
  children: React.ReactNode;
}

ThemeManager.setComponentTheme("Text", (props: any, context: any) => {
  const isBold = props.bold;
  const isSemiBold = props.semiBold;
  const satoshi = props?.dl || props?.h1 || props?.h2 || props?.h3
  return {
    style: {
      fontFamily: satoshi ? isBold ? "Satoshi-Bold" : "Satoshi-Medium" : isSemiBold ? "GeneralSans-Semibold" : "GeneralSans-Medium",
      color: Colors,
    },
  };
});

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [appIsReady, setAppIsReady] = React.useState(false);
    const [loaded,error] = useFonts({
        "Satoshi-Bold": require("@/assets/fonts/Satoshi-Bold.otf"),
        "Satoshi-Medium": require("@/assets/fonts/Satoshi-Medium.otf"),
        "GeneralSans-Medium": require("@/assets/fonts/GeneralSans-Medium.otf"),
        "GeneralSans-Semibold": require("@/assets/fonts/GeneralSans-Semibold.otf"),
    });
    useEffect(() => {
        if (loaded) {
          Typography.loadTypographies(Fonts);
          UColors.loadColors(Colors);
          setAppIsReady(true);
        }
      }, [loaded, error]);
      if (!appIsReady || !loaded) {
        return null;
      }
      return children
}

export default ThemeProvider;