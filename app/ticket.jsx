import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ThemeView from "../components/ThemeView";
import ThemeText from "../components/ThemeText";

export default function Ticket() {
  return (
    <ThemeView style={styles.container}>
      <ThemeText>Ticket</ThemeText>
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
