import { Dimensions, PixelRatio, Platform } from "react-native";

const { width, height } = Dimensions.get("window");
const scale = width / 375;
const vScale = height / 812;

export default function normalize(size: number, based: string = "width") {
  const newSize = based === "height" ? size * vScale : size * scale;
  const roundedSize = Math.round(PixelRatio.roundToNearestPixel(newSize));
  return Platform.OS === "ios" ? roundedSize : roundedSize - 1;
}
