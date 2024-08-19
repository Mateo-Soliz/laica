import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ProgressBar = ({
  CurrentStep,
  TotalSteps,
}: {
  CurrentStep: number;
  TotalSteps: number;
}) => {
  const progress = (CurrentStep / TotalSteps) * 100;
  return (
    <View>
      <Text>ProgressBar</Text>
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({});
