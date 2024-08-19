import { TextProps } from "react-native";

import { NativeText } from "react-native/Libraries/Text/TextNativeComponent";

import { Colors, Fonts } from "@/constants";

interface LeanTextProps extends TextProps {
  bold?: boolean;
  semiBold?: boolean;
  dl?: boolean;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  headline?: boolean;
  subHead?: boolean;
  body?: boolean;
  callout?: boolean;
  footnote?: boolean;
  caption1?: boolean;
  center?: boolean;
  caption2?: boolean;
  Colors?: string;
}

const LeanText: React.FC<LeanTextProps> = (props) => {
  const { bold, semiBold, dl, h1, h2, h3, style, ...rest } = props;
  const isBold = bold;
  const isSemiBold = semiBold;
  const satoshi = dl || h1 || h2 || h3;
  const fontFamily = satoshi
    ? isBold
      ? "Satoshi-Bold"
      : "Satoshi-Medium"
    : isSemiBold
      ? "GeneralSans-Semibold"
      : "GeneralSans-Medium";
  const color = props.Colors || Colors.primary1;
  const center = props.center ? "center" : "left";
  return (
    <NativeText
      {...rest}
      style={[
        {
          fontFamily,
          color,
          ...getFontSize(props),
          textAlign: center,
        },
        style,
      ]}
    />
  );
};

export default LeanText;

const getFontSize = (props: LeanTextProps) => {
  if (props.dl) {
    return Fonts.dl;
  }
  if (props.h1) {
    return Fonts.h1;
  }
  if (props.h2) {
    return Fonts.h2;
  }
  if (props.h3) {
    return Fonts.h3;
  }
  if (props.headline) {
    return Fonts.headline;
  }
  if (props.subHead) {
    return Fonts.subHead;
  }
  if (props.body) {
    return Fonts.body;
  }
  if (props.callout) {
    return Fonts.callout;
  }
  if (props.footnote) {
    return Fonts.footnote;
  }
  if (props.caption1) {
    return Fonts.caption1;
  }
  if (props.caption2) {
    return Fonts.caption2;
  }
};
