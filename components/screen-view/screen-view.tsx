import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, ViewProps } from "react-native-ui-lib";
import { Colors } from "react-native-ui-lib";

import normalize from "@/utils/normalize";
interface ScreenViewProps extends ViewProps {
  children?: React.ReactNode;
  backgroundColor?: string;
  useSafeArea?: boolean;
  isTab?: boolean;
  scrollView?: boolean;
  loading?: boolean;
  loadingTitle?: string;
}

const ScreenView: React.FC<ScreenViewProps> = ({
  children,
  backgroundColor = Colors.secondary,
  useSafeArea = true,
  isTab,
  scrollView,
  loading = false,
  loadingTitle = "",
  ...rest
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      flex
      backgroundColor={backgroundColor}
      style={[
        useSafeArea && {
          paddingTop: normalize(insets.top, "height"),
          paddingBottom: isTab
            ? 0
            : insets.bottom > 0
              ? normalize(insets.bottom, "height")
              : normalize(34, "height"),
        },
      ]}
      {...rest}
    >
      {children}
    </View>
  );
};

export default ScreenView;
