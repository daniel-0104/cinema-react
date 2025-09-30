import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Promotion() {
  return (
    <View style={styles.container}>
      <Text>Promotions</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
