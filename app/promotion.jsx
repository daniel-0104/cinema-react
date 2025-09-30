import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ThemeView from "../components/ThemeView";
import ThemeText from "../components/ThemeText";

export default function Promotion() {
  return (
    <ThemeView style={styles.container}>
      <ThemeText>Promotions</ThemeText>
    </ThemeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
